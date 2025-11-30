const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    // Configure SMTP (replace with your host details)
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Construct email body dynamically
    const fields = Object.entries(data).map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).join('\n');

    // Send email
    await transporter.sendMail({
      from: `"Evka Consultz Website" <${process.env.SMTP_USER}>`,
      to: "info@evkaconsultz.com",
      subject: data.subject ? `New Submission: ${data.subject}` : "New Form Submission",
      text: fields
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error: error.message })
    };
  }
};
