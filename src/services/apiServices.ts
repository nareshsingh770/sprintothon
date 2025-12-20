import { RegistrationFormData } from "@/types";

export const regsiterParticipant = async (data: RegistrationFormData) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxq9vmVMIiMjBpTjh_lDdXCCh2SHYXf6-mSjx9K9-yGu9Y92hf8TP-mRV4O9usXecLP/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response;
};
