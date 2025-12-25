import PrizeCard from "@/components/PrizeCard.tsx";

export default function PrizesSection() {
  // Medidas constantes basadas en el viewport
  const fsTitle = "4.86vw";
  const fsSponsor = "0.9vw";
  const gapCards = "8.33vw";

  return (
    <section className="w-full bg-[#1f374f] py-[12vh] flex flex-col items-center overflow-hidden">

      {/* TÍTULO PRINCIPAL */}
      <div className="text-center mb-[10vh]">
        <h2
          style={{ fontSize: fsTitle }}
          className="gothamU text-white leading-none uppercase tracking-normal"
        >
          Premios
        </h2>
        <p
          style={{ fontSize: fsSponsor, letterSpacing: '0.35em' }}
          className="gotham text-[#6e6e6e] font-bold uppercase mt-2"
        >
          Sponsoreados por
        </p>
      </div>

      {/* CONTENEDOR DE CARTAS */}
      <div
        style={{ gap: gapCards }}
        className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center w-[95vw]"
      >
        {/* Se eliminó screenWidth de todas las cartas para solucionar el error de TypeScript */}
        <PrizeCard
          label="1ER LUGAR" sponsor="CARPINCHO"
          image="/img/Carpincho.png" prizeTitle="SKIN" prizeDesc="LEGENDARIA"
          position="1"
        />
        <PrizeCard
          label="2DO LUGAR" sponsor="MIDDAS"
          image="/img/Middas.png" prizeTitle="SKIN" prizeDesc="1350 RP"
          position="2"
        />
        <PrizeCard
          label="3ER LUGAR" sponsor="BETOMIN"
          image="/img/Betomin.png" prizeTitle="PREMIO" prizeDesc="SORPRESA"
          position="3"
        />
        <PrizeCard
          label="PREMIO ESPECIAL" sponsor="REICH"
          image="/img/Reich.png" prizeTitle="PASE DE" prizeDesc="BATALLA"
          position="?"
          isSpecial
          footerText="PRIMERO EN SUBIR LA CUENTA A DIAMANTE"
        />
      </div>
    </section>
  );
}
