require("dotenv").config();
const express = require("express");
const cors = require("cors");  // ✅ Only require cors once
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Debugging: Check if environment variables are loading
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists ✅" : "Missing ❌");

// ✅ Use correct CORS settings
app.use(cors({
  origin: "https://website-black-theta.vercel.app", // Your actual frontend URL
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
