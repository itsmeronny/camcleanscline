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

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:0;margin:0;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      
      <div style="text-align:center;margin-bottom:30px;">
        <img src="https://camcleans.co.uk/brand/camcleans-email.png" alt="CamCleans" style="max-width:100%;height:auto;width:600px;">
      </div>

      <h2 style="margin-top:0;">New Cleaning Enquiry</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Postcode:</strong> ${data.postcode}</p>
      <p><strong>Service Requested:</strong> ${data.service}</p>

      <h3>Message</h3>
      <p style="white-space:pre-line;">${data.message}</p>

      <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">

      <p style="font-size:12px;color:#777;">
      CamCleans Website Enquiry
      </p>

    </div>
  </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "CamCleans Enquiries <quotes@camcleans.co.uk>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New Cleaning Enquiry",
      text: message,
      html: html
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return new Response(`Email failed: ${errorText}`, { status: 500 });
  }

  return Response.redirect("https://camcleans.co.uk/enquiry-received", 302);
}