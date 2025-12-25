import { useEffect, useState } from "preact/hooks";
import _FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import type { ComponentChildren } from "preact";

interface FlipClockProps {
  to: number | string | Date;
  renderOnServer?: boolean;
  digitBlockStyle?: Record<string, string | number>;
  labelStyle?: Record<string, string | number>;
  dividerStyle?: { color?: string; height?: string | number }; // Cambiado a string | number
  className?: string;
  separatorStyle?: { color?: string; size?: string | number };
  labels?: string[];
  duration?: number;
  children?: ComponentChildren;
}

const FlipClockCountdown = _FlipClockCountdown as unknown as preact.ComponentType<FlipClockProps>;

export default function Timer({ targetTimestamp }: { targetTimestamp: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Definimos las medidas elásticas como constantes
  const blockW = "4.5vw";
  const blockH = "6.07vw";
  const fontSize = "2.92vw";

  return (
    <div className="w-full flex flex-col items-center py-[2vh] px-[2vw]">

      <h3 className="gotham text-(--color-azul) text-[1.2vw] tracking-[0.2em] uppercase mb-[2vh] font-bold text-center">
        El torneo empieza en
      </h3>

      <div className="flex justify-center w-full overflow-hidden">
        {mounted && (
          <FlipClockCountdown
            to={targetTimestamp}
            renderOnServer
            labels={['DÍAS', 'HORAS', 'MINUTOS', 'SEGUNDOS']}
            duration={0.45}
            digitBlockStyle={{
              // Usamos "as any" para que TypeScript permita enviar VW a una prop que espera números
              width: blockW ,
              height: blockH ,
              fontSize: fontSize ,
              backgroundColor: "var(--color-dorado)",
              color: "var(--color-blanco)",
              borderRadius: "1.35vw",
              fontFamily: "'Gotham', sans-serif",
              fontWeight: 300,
            }}
            dividerStyle={{
              color: "var(--color-blanco)",
              height: "0.2vw"
            }}
            labelStyle={{
              fontSize: "1.1vw",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-azul)",
              marginTop: "1.5vh",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 800,
            }}
            className="flex gap-[2.5vw]"
            separatorStyle={{
              color: "var(--color-azul)",
              size: "0.4vw"
            }}
          >
            <div className="text-(--color-dorado) font-black text-[4vw] uppercase gothamU text-center animate-bounce">
              ¡Torneo Iniciado!
            </div>
          </FlipClockCountdown>
        )}
      </div>
    </div>
  );
}
