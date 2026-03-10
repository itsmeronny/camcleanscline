export async function onRequestPost(context) {

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

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;padding:0;margin:0;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">
      <div style="text-align:center;margin-bottom:30px;">
        <img src="https://camcleans.co.uk/brand/camcleans-email.png" alt="CamCleans" style="max-width:100%;height:auto;width:600px;">
      </div>
      <h2 style="margin-top:0;">New Cleaner Network Application</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Business Name:</strong> ${data.business_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Postcode:</strong> ${data.postcode}</p>
      <p><strong>Areas Covered:</strong> ${data.areas}</p>
      <p><strong>Services Offered:</strong> ${data.services}</p>
      <p><strong>Years Experience:</strong> ${data.experience}</p>
      <p><strong>Public Liability Insurance:</strong> ${data.insurance}</p>
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
      from: "CamCleans Network <quotes@camcleans.co.uk>",
      to: ["camcleansnetwork@gmail.com"],
      subject: "New Cleaner Application",
      text: message,
      html: html
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return new Response(`Email failed: ${errorText}`, { status: 500 });
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/application-received"
    }
  });

}