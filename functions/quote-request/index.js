export async function onRequestPost(context) {

  const formData = await context.request.formData();
  const data = Object.fromEntries(formData);

  if (data.company) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/enquiry-received"
      }
    });
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

  const response = await fetch("https://api.resend.com/emails", {
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

  const resendResult = await response.text();
  console.log("RESEND RESPONSE:", resendResult);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/enquiry-received"
    }
  });

}