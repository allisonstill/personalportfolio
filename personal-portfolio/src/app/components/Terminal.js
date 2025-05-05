"use client";
import { useEffect, useState } from "react";

export default function Terminal() {
  const lines = [
    "Initializing portfolio...",
    "Loading skills.",
    "npm install --g creativity",
    "Ready. Scroll to explore."
  ];

  const [output, setOutput] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => [...prev, lines[index]]);
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);
  

  return (
    <div className="bg-black text-blue-400 font-mono text-sm p-4 rounded-lg shadow-md border border-blue-500">
      {output.map((line, i) => (
        <div key={i} className="whitespace-pre">
          {line}
        </div>
      ))}
      <div className="animate-pulse">▊</div>
    </div>
  );
}
