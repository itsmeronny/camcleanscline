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

  // Admin lead email
  const adminResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans <onboarding@resend.dev>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New CamCleans Quote Request",
      text: message
    })
  });

  const adminResult = await adminResponse.text();
  console.log("ADMIN EMAIL RESPONSE:", adminResult);

  // Customer confirmation email
  const customerResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans <onboarding@resend.dev>",
      to: [data.email],
      subject: "CamCleans Quote Request Received",
      text: `Hi ${data.name},

Thanks for requesting a cleaning quote from CamCleans.

Estimated Price: £${price}

A cleaner will review your request and confirm availability shortly.

Property:
${data.property_type}
${data.bedrooms} bedroom
${data.bathrooms} bathroom
${data.clean_type}

Postcode:
${data.postcode}

If any details are incorrect simply reply to this email.

CamCleans`
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