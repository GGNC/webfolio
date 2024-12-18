import { useEffect, useState } from "react";

interface useTypeWritterProps {
  text: string;
  speed: number;
}
export function useTypeWritter({ text, speed = 100 }: useTypeWritterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev === text) {
          clearInterval(interval);
          setIsCompleted(true);
          return prev;
        }
        return prev + text[index];
      });
      index++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayedText, isCompleted };
}
