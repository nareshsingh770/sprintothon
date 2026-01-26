import { https } from 'firebase-functions';
import express from 'express';
import { HttpsError, onCall, onRequest } from 'firebase-functions/v2/https';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';

const app = express();

// Zoho Email Configuration
const emailTransporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: 'connect@sprintothon.com',
    pass: 'r7MhfzdgdrUN',
  },
});

// Helper function to send email
const sendEmail = async (to, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: 'connect@sprintothon.com',
      to,
      subject,
      html: htmlContent,
    };
    const response = await emailTransporter.sendMail(mailOptions);
    console.log('Email sent successfully:', response.messageId);
    return { success: true, messageId: response.messageId };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error.message };
  }
};

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

export const api = onRequest(app);

// Razorpay instance (replace with your actual key_id and key_secret)
const razorpay = new Razorpay({
  // key_id: 'rzp_live_Rjr6kDsmmEBbfb',
  // key_secret: 'ZjXwH51dVpp3do9iA0r0UFtj',
  key_id: 'rzp_test_RwxFwEZYglQ518',
  key_secret: 'jD5g3NiQvqvzQ4d6RbRhUilW',
});

// Handler for capturePaymentHttp
export const capturePaymentHttp = onCall(async (request) => {
  const { payment_id, amount, userEmail, userName } = request.data;
  if (!payment_id || !amount) {
    throw new HttpsError("invalid-argument", "Missing payment_id or amount");
  }
  // Ensure amount is an integer (paise for INR)
  const parsedAmount = parseInt(amount, 10);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    throw new Error('Amount must be a positive integer in paise');
  }
  console.log(payment_id, parsedAmount, 'DEBUG capturePaymentHttp called with');
  try {
    const captureResponse = await razorpay.payments.capture(payment_id, parsedAmount);
    
    // Send payment confirmation email
    if (userEmail) {
      const amountInRupees = (parsedAmount / 100).toFixed(2);
      const emailHtml = `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2c3e50;">Payment Confirmation</h2>
              <p>Dear ${userName || 'User'},</p>
              <img src="https://www.sprintothon.com/images/mail-template.jpeg" />
              <p>
                Thank you for registering for Sprintothon Family Marathon. A Family Time Screen Free Moment.
                <br/>
                Please refer your friends and family to get cashbacks.
                </p>
                <p>
                Create a reel and tag our pages maximum views reel creator will get a chance to be on the stage with our celebrity.
                <br/>
                You will soon receive the details for Racing Kit collection
                <br/>
                See you at the finish line!
              </p>
              <div style="border: 2px solid #3498db; padding: 20px; border-radius: 8px; background-color: #ecf0f1; margin: 20px 0;">
                <h3 style="color: #2c3e50; margin-top: 0;">Payment Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold;">Payment ID:</td>
                    <td style="padding: 10px 0;">${payment_id}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold;">Amount:</td>
                    <td style="padding: 10px 0;">₹${amountInRupees}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold;">Status:</td>
                    <td style="padding: 10px 0; color: #27ae60;"><strong>Completed</strong></td>
                  </tr>
                </table>
              </div>
              
              <p>If you have any questions or need further assistance, please don't hesitate to contact our support team.</p>
              <p style="margin-top: 30px; color: #7f8c8d;">Best regards,<br/><strong>Sprintothon Team</strong></p>
            </div>
          </body>
        </html>
      `;
      
      await sendEmail(userEmail, 'Payment Confirmation - Sprintothon', emailHtml);
    }
    
    return {
      status: 'success',
      payment_id,
      amount: parsedAmount,
      captureResponse,
      message: `Payment ${payment_id} captured for amount ${parsedAmount}`
    };
  } catch (error) {
    // Log error details for debugging
    console.error('Razorpay capture error:', error);
    return {
      status: 'error',
      message: error.message || 'Failed to capture payment',
      error: error,
      details: error.error || error.response || null
    };
  }
});