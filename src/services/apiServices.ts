export const addOnSheet = async (data: any) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyO-S0Hm3Ob_pCK-LhHVgXoNI4R4jeJZQKzDWRQWY6Nz8p3qncbnKJsWUGXUnleqPhJ/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response;
};
