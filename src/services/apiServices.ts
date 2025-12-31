import { RegistrationFormData } from "@/types";

export const regsiterParticipant = async (data: RegistrationFormData) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzVeY79BQ3mG9kAAubaFsQhj-XT-UwCy5f4qybyMgH4Zr1mtEX6xuj15QNs7BJw2GZZ/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "registration", ...data }),
    }
  );
  return response;
};
export const regsiterAdventureParticipant = async (
  data: RegistrationFormData
) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzVeY79BQ3mG9kAAubaFsQhj-XT-UwCy5f4qybyMgH4Zr1mtEX6xuj15QNs7BJw2GZZ/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "adventure", ...data }),
    }
  );
  return response;
};
