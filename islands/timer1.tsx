/*import { useEffect, useState } from "preact/hooks";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "npm:@leenguyen/react-flip-clock-countdown@1.7.2/dist/index.css";

export default function Timer({ targetTimestamp }: { targetTimestamp: number }) {
  const [mounted, setMounted] = useState(false);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    setMounted(true);
    const sync = () => setVersion((v) => v + 1);
    document.addEventListener("visibilitychange", sync);
    globalThis.addEventListener("focus", sync);
    return () => {
      document.removeEventListener("visibilitychange", sync);
      globalThis.removeEventListener("focus", sync);
    };
  }, []);

  if (!mounted) return <div className="h-[75px] w-[300px]" />;

  return (
    <div key={version} className="w-full flex justify-center items-center">
<FlipClockCountdown
  to={targetTimestamp}
  labels={['DÍAS', 'HORAS', 'MINUTOS', 'SEGUNDOS']}
  duration={0.45}

  digitBlockStyle={{
    width: 44,
    height: 58,
    fontSize: "1.9rem",
    backgroundColor: "var(--color-dorado)",
    color: "var(--color-blanco)",
    borderRadius: "8px", // Un poco menos redondo que el marco
    fontFamily: "'Gotham Ultra', sans-serif"
  }}


  labelStyle={{
    fontSize: "0.8rem",
    color: "var(--color-azul)",
    marginTop: "12px",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 600,
    textTransform: "uppercase"
  }}

  separatorStyle={{
    color: "var(--color-azul)",
    size: "2px"
  }}
/>
</div> )} */