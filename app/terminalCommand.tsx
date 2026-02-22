"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type TerminalCommandProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function TerminalCommand({
  text,
  speed = 60,
  onComplete,
}: TerminalCommandProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [typedText, setTypedText] = useState("");
  const startedRef = useRef(false); // 🔒 prevents restarting

  useEffect(() => {
    if (!isInView || startedRef.current) return;

    startedRef.current = true;

    let index = 0;

    const interval = setInterval(() => {
      index++;
      setTypedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView]); // 👈 IMPORTANT: keep dependency minimal

  return (
    <p ref={ref} className="text-green-400 mb-2 font-mono">
      {typedText}
      <span className="text-green-500 ml-1 blink-fast">_</span>
    </p>
  );
}