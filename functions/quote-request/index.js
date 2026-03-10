export async function onRequestPost(context) {

  const formData = await context.request.formData();
  const data = Object.fromEntries(formData);

  // Honeypot spam trap
  if (data.company) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/enquiry-received"
      }
    });
  }

  // UK postcode validation
  const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

  if (!UK_POSTCODE_REGEX.test(data.postcode)) {
    return new Response("Invalid postcode", { status: 400 });
  }

  const BASE_PRICES = {
    "end-of-tenancy": 190,
    "deep-clean": 150,
    "after-builders": 210,
    "carpet-clean": 80
  };

  const BEDROOM_MULTIPLIER = {
    1: 1,
    2: 1.25,
    3: 1.5,
    4: 1.8,
    5: 2.2
  };

  const PROPERTY_MULTIPLIER = {
    flat: 1,
    house: 1.15,
    bungalow: 1.1,
    other: 1.2
  };

  const BATHROOM_PRICE = 25;

  const cleanType = data.clean_type;
  const bedrooms = parseInt(data.bedrooms);
  const bathrooms = parseInt(data.bathrooms);
  const propertyType = data.property_type;

  let base = BASE_PRICES[cleanType] || 0;
  let bedroomFactor = BEDROOM_MULTIPLIER[bedrooms] || 1;
  let propertyFactor = PROPERTY_MULTIPLIER[propertyType] || 1;

  let price = base * bedroomFactor * propertyFactor;

  price += bathrooms * BATHROOM_PRICE;

  price = Math.round(price);

  // Price sanity limits
  if (price < 120) price = 120;

  if (price > 600) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/manual-quote-required"
      }
    });
  }

  const cleanerPayout = Math.round(price * 0.65);
  const margin = price - cleanerPayout;

  const message = `
New Quote Request

Estimated Job Price: £${price}
Cleaner Payout: £${cleanerPayout}
CamCleans Margin: £${margin}

Property Details
Postcode: ${data.postcode}
Property Type: ${data.property_type}
Bedrooms: ${data.bedrooms}
Bathrooms: ${data.bathrooms}
Cleaning Type: ${data.clean_type}
Preferred Date: ${data.date_required}

Notes:
${data.notes}

Customer Details
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
`;

  const resendKey = context.env.RESEND_API_KEY;

  const adminHtml = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:0;margin:0;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">

      <div style="text-align:center;margin-bottom:30px;">
        <img src="https://camcleans.co.uk/brand/camcleans-email.png" alt="CamCleans" style="max-width:100%;height:auto;width:600px;">
      </div>

      <h2>New CamCleans Quote Request</h2>

      <p><strong>Estimated Job Price:</strong> £${price}</p>
      <p><strong>Cleaner Payout:</strong> £${cleanerPayout}</p>
      <p><strong>CamCleans Margin:</strong> £${margin}</p>

      <h3>Property Details</h3>
      <p><strong>Postcode:</strong> ${data.postcode}</p>
      <p><strong>Property Type:</strong> ${data.property_type}</p>
      <p><strong>Bedrooms:</strong> ${data.bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${data.bathrooms}</p>
      <p><strong>Cleaning Type:</strong> ${data.clean_type}</p>
      <p><strong>Preferred Date:</strong> ${data.date_required}</p>

      <h3>Notes</h3>
      <p style="white-space:pre-line;">${data.notes}</p>

      <h3>Customer Details</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>

    </div>
  </div>
  `;

  // Admin lead email
  const adminResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans <quotes@camcleans.co.uk>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New CamCleans Quote Request",
      text: message,
      html: adminHtml
    })
  });

  const adminResult = await adminResponse.text();
  console.log("ADMIN EMAIL RESPONSE:", adminResult);

  const customerHtml = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:0;margin:0;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">

      <div style="text-align:center;margin-bottom:30px;">
        <img src="https://camcleans.co.uk/brand/camcleans-email.png" alt="CamCleans" style="max-width:100%;height:auto;width:600px;">
      </div>

      <h2>Quote Request Received</h2>

      <p>Hi ${data.name},</p>

      <p>Thanks for requesting a cleaning quote from CamCleans.</p>

      <p><strong>Estimated Price:</strong> £${price}</p>

      <p>A cleaner will review your request and confirm availability shortly.</p>

      <h3>Property</h3>
      <p>${data.property_type}</p>
      <p>${data.bedrooms} bedroom</p>
      <p>${data.bathrooms} bathroom</p>
      <p>${data.clean_type}</p>

      <h3>Postcode</h3>
      <p>${data.postcode}</p>

      <p>If any details are incorrect simply reply to this email.</p>

      <p>CamCleans</p>

    </div>
  </div>
  `;

  // Customer confirmation email
  const customerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans <quotes@camcleans.co.uk>",
      to: [data.email],
      subject: "CamCleans Quote Request Received",
      text: `Hi ${data.name},

Thanks for requesting a cleaning quote from CamCleans.

Estimated Price: £${price}

A cleaner will review your request and confirm availability shortly.`,
      html: customerHtml
    })
  });

  const customerResult = await customerResponse.text();
  console.log("CUSTOMER EMAIL RESPONSE:", customerResult);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/enquiry-received"
    }
  });

}