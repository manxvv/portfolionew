import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env.local
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env.local
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address where you want to receive messages
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}