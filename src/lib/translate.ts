// const X_RapidAPI_Key = "7fa7c3b488msh920e5010045dd13p1c07f0jsn8ba15e2a7cea";
const X_RapidAPI_Host = "google-translate113.p.rapidapi.com";

export interface Result {
  trans: string;
  source_language_code?: string;
  source_language?: string;
  trust_level?: number;
}

export interface Language {
  code: string;
  language: string;
}

export async function getSupportedLanguages(): Promise<Language[]> {
  const url =
    "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": X_RapidAPI_Host,
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function translate(
  text: string,
  from: string,
  to: string
): Promise<Result> {
  // from can be "auto"
  const translationUrl =
    "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": X_RapidAPI_Host,
    },
    body: new URLSearchParams({
      from,
      to,
      text,
    }),
  };

  const response = await fetch(translationUrl, options);
  const result = await response.json();
  return result;
}
