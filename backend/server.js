import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Contact from "./models/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ✅ API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save message in DB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password, not normal Gmail password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${subject || "No Subject"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
