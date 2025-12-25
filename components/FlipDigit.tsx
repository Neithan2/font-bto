import { useEffect, useState } from "preact/hooks";

export function FlipDigit({ value }: { value: string }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <span class={`flip ${flip ? "active" : ""}`}>
      <span class="card top">{prev}</span>
      <span class="card bottom">{value}</span>
    </span>
  );
}
