import { getFunctions, httpsCallable } from "firebase/functions";
import type { FirebaseApp } from "firebase/app";

export const callRazorpayCapturePayment = async (
  payment_id: string,
  amount: number,
  functions: ReturnType<typeof getFunctions>,
  userEmail?: string,
  userName?: string
) => {
  const capturePayment = httpsCallable(functions, "capturePaymentHttp");
  const res = await capturePayment({
    payment_id: payment_id,
    amount: amount,
    userEmail: userEmail,
    userName: userName,
  });
};

export interface PaymentOptions {
  amount: number;
  gstExclude?: boolean;
  platformFee: number;
  paymentTitle: string;
  eventTitle: string;
  functions: ReturnType<typeof getFunctions>;
  userEmail: string;
  userName: string;
  onSuccess: (payment_id: string) => void;
  onDismiss?: () => void;
}

export const initiateRazorpayPayment = (options: PaymentOptions) => {
  const {
    amount,
    gstExclude=false,
    platformFee,
    paymentTitle,
    eventTitle,
    functions,
    userEmail,
    userName,
    onSuccess,
    onDismiss,
  } = options;

  const totalAmount = amount + (gstExclude ? 0 : Math.round(amount * 0.18)) + platformFee || 0;

  const razorpayOptions = {
    // key: "rzp_live_Rjr6kDsmmEBbfb",
    key: "rzp_test_RwxFwEZYglQ518",
    amount: totalAmount * 100, // Amount in paise
    currency: "INR",
    name: paymentTitle,
    description: `Payment for ${eventTitle}`,
    image: "/logo.png",
    config: {
      display: {
        preferences: {
          show_default_blocks: false,
        },
        blocks: {
          upi: {
            name: "Pay using UPI",
            instruments: [
              {
                method: "upi",
              },
            ],
          },
        },
        sequence: ["block.upi"],
      },
    },
    theme: {
      color: "#db2777", // Pink color
    },
    handler: function (response: any) {
      callRazorpayCapturePayment(
        response.razorpay_payment_id,
        totalAmount * 100,
        functions,
        userEmail,
        userName
      );
      onSuccess(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        if (onDismiss) {
          onDismiss();
        } else {
          console.log("Payment cancelled");
        }
      },
    },
  };

  const razorpay = new (window as any).Razorpay(razorpayOptions);
  razorpay.open();
};
