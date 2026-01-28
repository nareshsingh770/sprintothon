export const addOnSheet = async (data: any) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbx-SHv8-5ml2ISgbkv_QIpifC62NMNmw25iVXU6LE0LG6gqTgDrYUW9sFvjFZOyZIvf/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  return response;
};
