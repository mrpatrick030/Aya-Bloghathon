import nodemailer from "nodemailer";
 
export default async (req, res) => {
  const { full_name, subject, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }

  });
 
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_TO,
      subject: `${subject}`,
      html: `<div style="color:#fff;background-color:#226;font-size:120%;box-shadow:2px 2px 2px 2px #ccf;padding:5%">
        <p style="font-size:170%;text-align:center;font-weight:bold;margin-bottom:3%;color:#fff">INFORMATIO BLOG</p>
        <p><span style="font-weight:bold">${full_name}</span> just sent you a message from <a href="https://informatioblog.vercel.app" style="color:#fff;text-decoration:none">Informatioblog.vercel.app</a></p>
        <p style="margin-bottom:2%;margin-top:4%"><span style="padding:0.2cm;background-color:#004;font-weight:bold">User's contact details</span></p>
        <p><strong>Phone number - </strong> ${phone}</p>
        <p><strong>Email - </strong><span><a style="text-decoration:none;color:#fff">${email}</a></span></p>
        <p style="margin-bottom:2%;margin-top:4%"><span style="padding:0.2cm;background-color:#004;font-weight:bold">User's message</span></p>
        <p style="background-color:#fff;color:#333;padding:0.3cm;margin-bottom:3%">${message}</p>
        <p style="margin-bottom:2%;margin-top:4%"><span style="padding:0.2cm;background-color:#004;font-weight:bold">Tap users's email below to reply</span></p>
        <p style="background-color:#226;padding:0.3cm;text-align:center;font-size:110%;font-weight:bold;color:#fff;cursor:pointer">${email}</p>
        </div>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};