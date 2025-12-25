import Timer from "../islands/Timer.tsx";
import HeroActions from "../islands/HeroActions.tsx";
import PrizesSection from "../islands/PrizeSection.tsx";

export default function Inicio() {
  const TARGET_DATE = new Date("2026-01-01T00:00:00").getTime();

  return (
    <main className="flex flex-col overflow-x-hidden bg-[#1f374f]">

      {/* 1. HERO CON PRIORIDAD ALTA: Evita que el contenido de abajo salte al cargar la imagen */}
      <section className="w-full">
        <img
          src="/img/Hero.webp"
          className="w-full h-auto block"
          alt="Hero"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
      </section>

      {/* 2. SECCIÓN INTERMEDIA */}
      <section className="w-full py-[6vw] flex justify-center border-t border-white/5">

        <div className="w-full px-[4vw] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[5vw] items-center md:items-start">

          {/* COLUMNA IZQUIERDA: Islas interactiva */}
          <div className="flex flex-col items-center md:items-start gap-[4vw] w-full">

            {/* CONTENEDOR TIMER:
                Añadimos min-h-[12vw] para reservar el espacio exacto del reloj.
                Incluso antes de que cargue el JS, el fondo blanco ya tendrá su tamaño final. */}
            <div className="bg-white rounded-[1.5vw] shadow-2xl overflow-hidden w-fit mx-auto border border-white/10 px-[2vw] py-[1vh] min-h-[12vw] flex items-center justify-center">
              <Timer targetTimestamp={TARGET_DATE} />
            </div>

            {/* CONTENEDOR HERO ACTIONS:
                Reservamos un espacio mínimo de 15vw para evitar que la página se "estire"
                cuando aparezcan los botones de inscripción. */}
            <div className="w-full min-h-[15vw]">
              <HeroActions />
            </div>
          </div>

          {/* COLUMNA DERECHA: Texto (SSR puro, no parpadea) */}
          <div className="text-center md:text-left text-white w-full">
            <h2 className="gothamU uppercase leading-[1.1] mb-[3vw]
                           text-[5vw] md:text-[4vw] text-[#dfb760]">
              En qué consiste...
            </h2>

            <div className="ralewayR space-y-[2vw] text-white/90
                            text-[1.8vw] md:text-[1.3vw] leading-relaxed">
              <p>
                Este torneo está pensado para todo aquel que quiera medir sus
                habilidades en SoloQueue contra otros jugadores.
              </p>
              <p>
                Streamers, mods, vips, viewers, etc. Absolutamente todos contra todos
                en una competencia sin tregua.
              </p>
              <p className="font-bold text-[#dfb760] tracking-wide text-[1.2em]">
                Dos semanas para decidir quién ganará el trono del BTOQ2.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN PREMIOS: Estática en VW, no parpadea */}
      <PrizesSection />
    </main>
  );
}
