import { define } from "../utils.ts";

export default define.page(function StreamsPage() {
  // CONVERSIÓN ELÁSTICA (Cero Píxeles):
  // pt-32 -> pt-[8vw]
  // text-4xl -> text-[2.5vw]
  // p-10 -> p-[2.8vw]
  // rounded-20px -> rounded-[1.4vw]
  // h-0.5 -> h-[0.15vw]

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-[8vw] pb-[4vw] px-[2vw]">
      <div className="bg-[#1b3149] border-[0.15vw] border-(--color-dorado) rounded-[1.4vw] p-[2.8vw] shadow-2xl text-center max-w-[45vw] w-full">

        <h1 className="text-[2.5vw] font-black gothamU text-(--color-dorado) uppercase tracking-tighter mb-[1vw]">
          STREAMS
        </h1>

        {/* Línea divisora elástica */}
        <div className="h-[0.15vw] w-[6vw] bg-(--color-dorado) mx-auto mb-[1.5vw] opacity-50" />

        <p className="raleway text-[1.2vw] text-white/80 font-light tracking-wide italic">
          "Señal en vivo y transmisiones oficiales"
        </p>

        {/* Barra de Próximamente unificada */}
        <div className="mt-[2vw] py-[1vw] px-[1.5vw] border-[0.1vw] border-white/10 rounded-[0.8vw] bg-[#1f374f]/50">
          <p className="gothamM text-[0.8vw] text-white/40 uppercase tracking-[0.3em]">
            Próximamente 15/1/2026
          </p>
        </div>
      </div>
    </section>
  );
});
