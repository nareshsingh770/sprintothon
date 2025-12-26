import { RegistrationFormData } from "@/types";

export const regsiterParticipant = async (data: RegistrationFormData) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxLdI1r1l86nVSArb-Un0gg3QKGw36pqtTK06P8QFJS9hkH2qejFvRfemhqlxTP6HY/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "registration", ...data }),
    }
  );
  return response;
};
