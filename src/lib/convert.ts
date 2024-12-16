const url = "https://currency-converter-pro1.p.rapidapi.com/convert";
const X_RapidAPI_Host = "currency-converter-pro1.p.rapidapi.com";

export async function convert(
  amount: number,
  from: string,
  to: string
): Promise<number> {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": X_RapidAPI_Host,
    },
  };

  const query =
    url +
    "?" +
    new URLSearchParams({
      from,
      to,
      amount: amount.toString(),
    });
  const response = await fetch(query, options);
  const result = await response.json();
  return result.result;
}
