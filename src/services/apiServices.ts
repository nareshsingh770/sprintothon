export const addOnSheet = async (data: any) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwAPkVwXPJ9uV1c7PtfxL87D7EFazIwaw_EJCLxz3KeQ693ezzMPsbYf6KpKekxPu5r/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response;
};
