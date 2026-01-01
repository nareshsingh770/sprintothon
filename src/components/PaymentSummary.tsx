import React from "react";

const PaymentSummary = ({
  price,
  platformFee,
}: {
  price: number;
  platformFee: number;
}) => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Ticket Price</span>
          <span className="font-medium">₹{price}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">GST (18%)</span>
          <span className="font-medium">+₹{(price || 0) * 0.18}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Platform Fee</span>
          <span className="font-medium">+₹{platformFee}</span>
        </div>
        <div className="border-t border-gray-600 pt-3 mt-3">
          <div className="flex justify-between">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="font-bold text-lg text-pink-600">
              ₹
              {(
                Number(price) +
                Number(price) * 0.18 +
                Number(platformFee)
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-[rgb(var(--background))] rounded-lg">
        <p className="text-xs text-muted-foreground">
          💡 Amount includes registration fee, platform charges, and applicable
          GST
        </p>
      </div>
    </>
  );
};

export default PaymentSummary;
