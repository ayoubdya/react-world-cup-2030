// const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "X-RapidAPI-Key": "7fa7c3b488msh920e5010045dd13p1c07f0jsn8ba15e2a7cea",
//     "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
//   },
//   body: new URLSearchParams({
//     from: "auto",
//     to: "ar",
//     text: "bonjeur mon ami",
//   }),
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// const url =
//   "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7fa7c3b488msh920e5010045dd13p1c07f0jsn8ba15e2a7cea",
//     "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// const response = await fetch(
//   `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=ar&dt=t&q=bonjour`
// );
// const data = await response.json();
// console.log(data[0][0][0]);

// const url =
//   "https://currency-converter-pro1.p.rapidapi.com/convert?" +
//   new URLSearchParams({
//     from: "USD",
//     to: "MAD",
//     amount: 29,
//   });
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7fa7c3b488msh920e5010045dd13p1c07f0jsn8ba15e2a7cea",
//     "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result.result);
// } catch (error) {
//   console.error(error);
// }

const url = "https://currency-converter-pro1.p.rapidapi.com/currencies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7fa7c3b488msh920e5010045dd13p1c07f0jsn8ba15e2a7cea",
    "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}
