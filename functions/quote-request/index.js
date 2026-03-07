export async function onRequestPost(context) {

const formData = await context.request.formData();

const data = Object.fromEntries(formData);

const message = `
New Quote Request

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

await fetch("https://api.resend.com/emails", {
method: "POST",
headers: {
"Authorization": `Bearer ${resendKey}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
from: "CamCleans <no-reply@camcleans.co.uk>",
to: ["camcleansnetwork@gmail.com"],
subject: "New CamCleans Quote Request",
text: message
})
});

return new Response(null, {
status: 302,
headers: {
Location: "/enquiry-received"
}
});

}