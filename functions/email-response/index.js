import { Resend } from "resend";

export async function onRequestPost(context) {

  const resend = new Resend(context.env.RESEND_API_KEY);

  try {

    const data = await context.request.json();

    const email = data.email || "";
    const name = data.name || "there";

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>CamCleans</title>
</head>

<body style="margin:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 12px;">
<tr>
<td align="center">

<table role="presentation" width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;border:1px solid #e6ebf2;overflow:hidden;">

<tr>
<td align="center" style="padding:30px;background:#f8fbff;border-bottom:1px solid #e6ebf2;">
<img src="https://camcleans.co.uk/assets/camcleans-email.png" width="220" style="display:block;width:220px;height:auto;" alt="CamCleans">
</td>
</tr>

<tr>
<td style="padding:34px 32px 10px 32px;">

<h1 style="margin:0 0 14px;font-size:28px;font-weight:700;color:#111827;">
Thanks for contacting CamCleans
</h1>

<p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#374151;">
Hi ${name}, your request has been received.
</p>

<p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#374151;">
A member of the CamCleans team will review your enquiry and contact you shortly.
</p>

</td>
</tr>

<tr>
<td align="center" style="padding:18px 32px 34px 32px;">

<a href="https://camcleans.co.uk"
style="display:inline-block;padding:14px 22px;background:#111827;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;border-radius:10px;">
Visit CamCleans
</a>

</td>
</tr>

<tr>
<td style="padding:0 32px 28px 32px;">

<hr style="border:none;border-top:1px solid #e6ebf2;margin:0 0 16px 0;">

<p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0;">
CamCleans<br>
Professional cleaning services across the United Kingdom<br>
<a href="https://camcleans.co.uk" style="color:#2563eb;text-decoration:none;">camcleans.co.uk</a>
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;

    await resend.emails.send({
      from: "camcleansnetwork@gmail.com",
      to: email,
      subject: "Your CamCleans request has been received",
      html
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {

    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });

  }

}