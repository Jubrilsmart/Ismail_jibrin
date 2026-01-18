import React, { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import Return from "../../components/Return";

const COLORS = [
  "#3C7C70", "#310BF0", "#2563EB", "#16A34A", "#7C3AED",
  "#F59E0B", "#0D9488", "#DB2777", "#EA580C", "#111827"
];

const DEFAULT_QUOTES = [
  { quote: "I was wise enough to never grow up while fooling most people into believing I had.", author: "Margaret Mead" },
  { quote: "If you do not tell the truth about yourself you cannot tell it about other people.", author: "Virginia Woolf" },
  { quote: "Freedom itself demands discomfort.", author: "Mark Manson" },
  { quote: "As soon as you truly commit to making something happen, the 'how' will reveal itself.", author: "Tony Robbins" },
  { quote: "The future belongs to those who learn more skills and combine them in creative ways.", author: "Robert Greene" }
];

function QuoteApp() {
  const [quotes, setQuotes] = useState(DEFAULT_QUOTES);
  const [index, setIndex] = useState(0);

  const color = COLORS[index % COLORS.length];
  const { quote, author } = quotes[index];

  // Fetch one quote and append it
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://quoteslate.vercel.app/api/quotes/random");
      const data = await res.json();

      setQuotes(prev => [
        ...prev,
        { quote: data.quote, author: data.author }
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  // Prefetch when running low
  useEffect(() => {
    if (quotes.length - index < 3) {
      fetchQuote();
      console.log(quotes)
    }
  }, [index, quotes.length]);

  const handleClick = () => {
    setIndex(prev => prev + 1);
  };

  return (
    <div
      className="absolute inset-0 flex justify-center items-center transition-colors duration-1000"
      style={{ backgroundColor: color, color: color}}
    >
      <div id="quote-box" className="w-5/6 max-w-xl p-6 bg-gray-300 space-y-4 rounded-lg">
        <Return />

        <blockquote className="space-y-4 text-center">
          <p id="text" className="text-3xl font-mono">
            <span className="text-7xl font-bold">&ldquo;</span>
            {quote}
          </p>
          <footer id="author" className="text-xl font-serif">
            — {author}
          </footer>
        </blockquote>

        <div className="flex justify-between items-center text-2xl">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" — ${author}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitterX />
          </a>

          <button
            id="new-quote"
            onClick={handleClick}
            className="px-3 py-1 rounded-md text-white transition-colors duration-1000 hover:cursor-pointer"
            style={{ backgroundColor: color }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteApp;
