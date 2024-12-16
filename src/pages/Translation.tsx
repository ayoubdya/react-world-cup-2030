import Wave from "@/components/Wave";
import LanguageSelector from "@/components/translation/LanguageSelector";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { translate } from "@/lib/translate";
import { Copy, Delete } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Translation = () => {
  const [from, setFrom] = useState("auto");
  const [to, setTo] = useState("ar");

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const [loading, setLoading] = useState(false);

  async function onTranslate() {
    setLoading(true);
    const result = await translate(inputText, from, to);
    setOutputText(result.trans);
    setFrom(result.source_language_code ?? from);
    setLoading(false);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setInputText(outputText);
    setOutputText(inputText);
  }

  function onCopy() {
    navigator.clipboard.writeText(outputText);
    toast.success("Copied to clipboard");
  }

  function onDelete() {
    setInputText("");
    setOutputText("");
  }

  return (
    <div className="custom-background bubble-background w-full flex flex-col gap-6 justify-center items-center relative p-4 pb-[100px]">
      <h1 className="text-white font-bold text-5xl text-center uppercase">
        Translate To Any Language
      </h1>
      <div className="max-w-7xl w-full flex flex-col sm:flex-row gap-2 p-2 justify-center">
        <div className="flex flex-col gap-2 flex-1 items-center w-full">
          <LanguageSelector
            code={from}
            setCode={setFrom}
            className="sm:ml-auto"
            disabled={loading}
          />
          <div className="w-full relative">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={loading}
              className="h-60 font-medium text-lg focus-visible:ring-offset-0 focus-visible:ring-0 border-4 border-gray-300"
            />
            <button
              className="absolute bottom-4 right-4 text-morocco-deep-red p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 active:bg-gray-400 active:scale-90 transition-all"
              onClick={onDelete}
              disabled={loading}
            >
              <Delete className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex mt-1 gap-2 justify-center sm:flex-col sm:gap-6 sm:justify-start items-center">
          <button
            className="p-2 rounded-full text-morocco-deep-red bg-gray-100 hover:bg-gray-200 disabled:opacity-50 active:bg-gray-300 active:scale-90 transition-all"
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
            className="p-2  rounded-full text-morocco-deep-red bg-gray-100 hover:bg-gray-200 disabled:opacity-50 active:bg-gray-300 active:scale-90 transition-all"
            onClick={onTranslate}
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
          <LanguageSelector
            code={to}
            setCode={setTo}
            className="sm:mr-auto"
            disabled={loading}
          />
          <div className="w-full relative">
            <Textarea
              value={outputText}
              readOnly={true}
              className="bg-gray-50 h-60 font-medium text-lg focus-visible:ring-offset-0 focus-visible:ring-0 border-4 border-gray-300"
            />
            <button
              className="absolute bottom-4 right-4 text-morocco-deep-red p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 active:bg-gray-400 active:scale-90 transition-all"
              onClick={onCopy}
              disabled={loading}
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <Wave />
      <Toaster />
    </div>
  );
};

export default Translation;
