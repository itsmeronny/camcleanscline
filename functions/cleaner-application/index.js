export async function onRequest(context) {

  if (context.request.method === "GET") {
    return context.next();
  }

  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const formData = await context.request.formData();
  const data = Object.fromEntries(formData);

  const message = `
New CamCleans Cleaner Network Application

Name: ${data.name}
Business Name: ${data.business_name}
Email: ${data.email}
Phone: ${data.phone}
Postcode: ${data.postcode}
Areas Covered: ${data.areas}
Services Offered: ${data.services}
Years Experience: ${data.experience}
Public Liability Insurance: ${data.insurance}
`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans Network <onboarding@resend.dev>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New Cleaner Application",
      text: message
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return new Response(`Email failed: ${errorText}`, { status: 500 });
  }

  return Response.redirect("https://camcleans.co.uk/application-received", 302);
}