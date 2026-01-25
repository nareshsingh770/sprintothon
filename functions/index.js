import { https } from 'firebase-functions';
import express from 'express';
import { onCall } from 'firebase-functions/v2/https';
import Razorpay from 'razorpay';

const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

export const api = https.onRequest(app);


// Razorpay instance (replace with your actual key_id and key_secret)
const razorpay = new Razorpay({
  key_id: 'rzp_live_Rjr6kDsmmEBbfb',
  key_secret: 'ZjXwH51dVpp3do9iA0r0UFtj',
  // key_id: 'rzp_test_RwxFwEZYglQ518',
  // key_secret: 'jD5g3NiQvqvzQ4d6RbRhUilW',
});

// Handler for capturePaymentHttp
export const capturePaymentHttp = onCall(async (request) => {
  const { payment_id, amount } = request.data;
  if (!payment_id || !amount) {
    throw new Error('Missing payment_id or amount');
  }
  // Ensure amount is an integer (paise for INR)
  const parsedAmount = parseInt(amount, 10);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    throw new Error('Amount must be a positive integer in paise');
  }
  console.log(payment_id, parsedAmount, 'DEBUG capturePaymentHttp called with');
  try {
    const captureResponse = await razorpay.payments.capture(payment_id, parsedAmount);
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