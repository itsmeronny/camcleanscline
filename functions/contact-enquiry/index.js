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
New CamCleans Cleaning Enquiry

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Postcode: ${data.postcode}
Service Requested: ${data.service}

Message:
${data.message}
`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans Enquiries <onboarding@resend.dev>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New Cleaning Enquiry",
      text: message
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return new Response(`Email failed: ${errorText}`, { status: 500 });
  }

  return Response.redirect("https://camcleans.co.uk/enquiry-received", 302);
}