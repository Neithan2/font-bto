import Modal from "./Modal.tsx";

interface RulesModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RulesModal({ open, onClose }: RulesModalProps) {
  const rules = [
    { text: "Las cuentas corren por cuenta propia (hand level o adquiridas).", bold: "cuenta propia" },
    { text: "Está permitido cualquier nick, siempre y cuando el tag sea #BTOQ2.", bold: "#BTOQ2" },
    { text: "Los participantes deberán estar suscriptos al canal de Betomin (también son válidas las suscripciones regaladas).", bold: "suscriptos al canal" },
    { text: "Está totalmente prohibido cualquier tipo de comportamiento antideportivo (toxicidad, racismo, xenofobia, etc.).", bold: "totalmente prohibido" },
  ];

  const faqs = [
    {
      q: "¿Cuánto dura el torneo?",
      a: "El evento empezará el 15 de enero a las 20:00 hs y finaliza el 29 de enero a las 22:00 hs (horario Argentina).",
      bold: "15 de enero"
    },
    {
      q: "¿Está permitido hacer DUO?",
      a: "Los duos estarán permitidos los primeros cuatro días del evento (no es necesario que sea con la misma persona).",
      bold: "primeros cuatro días"
    },
    {
      q: "¿Puede streamearse?",
      a: "Por supuesto. Eso sí, deberán incluir en el título del stream el hashtag del evento #BTOQ2",
      bold: "#BTOQ2"
    },
  ];

  const renderText = (fullText: string, boldPart?: string) => {
    if (!boldPart) return fullText;
    const parts = fullText.split(boldPart);
    return (
      <>
        {parts[0]}
        <span className="gothamU font-black">{boldPart}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <Modal isOpen={open} onClose={onClose} maxWidth="max-w-[83vw] md:max-w-[83vw]">
      {/* BOTÓN CERRAR */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-[2vh] right-[2vh] z-120 bg-black/10 hover:bg-[#dfb760] hover:text-[#1f374f] text-white w-[5vh] h-[5vh] min-w-8.75 min-h-8.75 rounded-full flex items-center justify-center transition-all shadow-lg"
      >
        <svg className="w-[60%] h-[60%]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* CONTENEDOR MAESTRO - md:h-auto para evitar scrolls internos innecesarios */}
      <div className="flex flex-col md:flex-row w-full h-auto md:min-h-[55vh] overflow-hidden rounded-xl shadow-2xl border border-white/10">

        {/* ================= SECCIÓN REGLAS ================= */}
        <div className="flex-1 bg-white p-[5vw] md:p-[1vw] pt-[4vh] md:pt-[10vh] flex flex-col items-center relative overflow-hidden">

          {/* TÍTULO REGLAS: min-h para alinear con el de al lado */}
          <div className="mb-[6vh] w-full flex flex-col items-start md:items-center min-h-[12vh] justify-end">
            <h2 className="gothamU text-[9vw] md:text-[4vw] text-(--color-azul) leading-[0.85] tracking-snug text-left">
              REGLAS
              <span className="block gotham text-[3.8vw] md:text-[1.5vw] tracking-widest mt-[0.5vh] text-(--color-azul) text-left">
                GENERALES
              </span>
            </h2>
          </div>

          <ul className="space-y-[7.5vh] w-full">
            {rules.map((item, index) => (
              <li key={index} className="flex items-center relative">
                <div className="w-[10vw] md:w-[5vw] flex justify-end shrink-0 mr-[1.5vw] md:-mr-[0.2vw]">
                  <span className="gothamU text-[9.0vw] md:text-[4.0vw] text-(--color-azul) leading-none text-right">
                    {index + 1}
                  </span>
                </div>
                <p className="gotham text-[3.5vw] md:text-[0.95vw] text-(--color-azul) leading-tight tracking-tight z-10 pl-[1vw]">
                  {renderText(item.text, item.bold)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SECCIÓN FAQ ================= */}
        <div className="flex-1 bg-(--color-azul) p-[5vw] md:p-[4vw] pt-[8vh] md:pt-[10vh] flex flex-col border-t md:border-t-0 md:border-l border-white/10">

          {/* TÍTULO PREGUNTAS: min-h idéntico para alineación perfecta */}
          <div className="mb-[6vh] w-full flex flex-col items-start min-h-[12vh] justify-end">
            <h2 className="gothamU text-[9vw] md:text-[4vw] text-(--color-blanco) leading-[0.85] tracking-snug text-left">
              PREGUNTAS
              <span className="block gotham text-[3.8vw] md:text-[1.5vw] tracking-widest mt-[0.5vh] text-(--color-blanco) text-left">
                FRECUENTES
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-[5vh] md:gap-[7vh]">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-(--color-dorado) rounded-[1.5vw] md:rounded-[1vw] p-[3vw] md:p-[1.2vw] transform hover:scale-[1.02] transition-transform shadow-lg">
                <p className="gotham text-[4.0vw] md:text-[1.1vw] text-(--color-azul) font-black uppercase leading-tight mb-[0.8vh]">
                  {faq.q}
                </p>
                <p className="raleway text-[3.0vw] md:text-[1.0vw] leading-snug text-(--color-azul) tracking-wide">
                  {renderText(faq.a, faq.bold)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
}
