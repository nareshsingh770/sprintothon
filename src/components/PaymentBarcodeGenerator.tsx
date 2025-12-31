import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface PaymentBarcodeGeneratorProps {
  value?: string;
}

const PaymentBarcodeGenerator: React.FC<PaymentBarcodeGeneratorProps> = ({
  value = "",
}) => {
  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [value]);
  return (
    <div className="flex flex-col items-center gap-4">
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value to generate QR"
        className="border rounded px-3 py-2 w-full max-w-xs"
      /> */}
      {input && <QRCodeSVG value={input} size={200} />}
    </div>
  );
};

export default PaymentBarcodeGenerator;
