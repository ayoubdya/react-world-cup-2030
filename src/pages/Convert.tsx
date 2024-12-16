import Wave from "@/components/Wave";
import CurrencySelector from "@/components/convert/CurrencySelector";
import { Input } from "@/components/ui/input";
import { convert } from "@/lib/convert";
import { useState } from "react";

const Translation = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("MAD");

  const [input, setInput] = useState(1);
  const [output, setOutput] = useState(9.93);

  const [loading, setLoading] = useState(false);

  async function onConvert() {
    if (!from || !to || from === to) {
      return;
    }
    setLoading(true);
    const result = await convert(input, from, to);
    setOutput(Number(result.toFixed(2)));
    setLoading(false);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setInput(output);
    setOutput(input);
  }

  return (
    <div className="p-4 w-full custom-background bubble-background flex flex-col gap-6 justify-center items-center relative pb-[100px]">
      <h1 className="text-white font-bold text-5xl text-center uppercase">
        Instantly Calculate Exchange Rates
      </h1>
      <div className="max-w-7xl w-full flex flex-col sm:flex-row gap-2 p-2 justify-center">
        <div className="flex flex-col gap-2 flex-1 items-center w-full">
          <CurrencySelector
            code={from}
            setCode={setFrom}
            className="sm:ml-auto"
            disabled={loading}
          />
          <Input
            value={input}
            type="number"
            inputMode="decimal"
            onChange={(e) => setInput(Number(e.target.value))}
            disabled={loading}
            className="w-full h-16 font-bold sm:w-64 sm:ml-auto text-2xl focus-visible:ring-offset-0 focus-visible:ring-0 border-4 border-gray-300"
          />
        </div>

        <div className="flex mt-1 gap-2 justify-center sm:flex-col sm:justify-start items-center">
          <button
            className="p-2 rounded-full text-morocco-deep-red sm:mt-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 active:bg-gray-300 active:scale-90 transition-all"
            onClick={swap}
            disabled={loading}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full text-morocco-deep-red sm:mt-5 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 active:bg-gray-300 active:scale-90 transition-all"
            onClick={onConvert}
            disabled={loading}
          >
            {loading ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 animate-spin"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-2 flex-1 items-center w-full">
          <CurrencySelector
            code={to}
            setCode={setTo}
            className="sm:mr-auto"
            disabled={loading}
          />

          <Input
            value={output}
            readOnly={true}
            className="bg-gray-50 w-full h-16 font-bold text-2xl sm:w-64 sm:mr-auto focus-visible:ring-offset-0 focus-visible:ring-0 border-4 border-gray-300"
          />
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Translation;
