import { useState } from "preact/hooks";
import RulesModal from "../components/RulesModal.tsx";
import VideoModal from "../components/VideoModal.tsx";
import InscripcionForm from "./InscripcionForm.tsx";

export default function HeroActions() {
  const [showRules, setShowRules] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full flex justify-center items-start px-2 md:px-0">
      {/*
        ULTRA COMPACTO MÓVIL:
        - max-w-[280px]: Muy estrecho para no ocupar toda la pantalla.
        - p-2.5: Relleno mínimo.
        - gap-2: Espacio muy reducido entre elementos.
      */}
      <div className="bg-white rounded-xl md:rounded-[2.2vw] p-2.5 md:p-[3vw] shadow-xl w-full max-w-70 sm:max-w-md md:max-w-none md:w-[75%] border border-gray-100 flex flex-col gap-2 md:gap-[2.2vh] transform-none">

        {/* BOTÓN PRINCIPAL: Inscripción
            - py-2: Muy bajo.
            - text-xs: Fuente pequeña pero legible.
        */}
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="w-full py-2 md:py-[2.8vh] rounded-lg md:rounded-[1.4vw] bg-[#dfb760] text-[#1f374f] gothamU text-xs md:text-[1.4vw] tracking-widest md:tracking-[0.2em] text-center hover:bg-[#e8c97a] transition-colors duration-200 shadow-sm font-black uppercase outline-none"
        >
          INSCRIPCIÓN
        </button>

        {/* BOTONES SECUNDARIOS
            - py-1.5: Altura mínima para botones.
            - text-[9px]: Fuente ultra pequeña compensada con tracking.
        */}
        <div className="flex flex-row gap-2 md:gap-[1.4vw]">
          <button
            type="button"
            onClick={() => setShowRules(true)}
            className="flex-1 py-1.5 md:py-[2vh] rounded-md md:rounded-[1vw] bg-[#1f374f] text-white gothamU text-[9px] sm:text-xs md:text-[0.95vw] tracking-widest md:tracking-[0.15em] hover:bg-[#2a4a6a] transition-colors duration-200 uppercase outline-none"
          >
            REGLAS
          </button>

          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="flex-1 py-1.5 md:py-[2vh] rounded-md md:rounded-[1vw] border md:border-[0.2vw] border-[#1f374f] text-[#1f374f] gothamU text-[9px] sm:text-xs md:text-[0.95vw] tracking-widest md:tracking-[0.15em] hover:bg-gray-50 transition-colors duration-200 uppercase outline-none"
          >
            TRAILER
          </button>
        </div>
      </div>

      {showRules && <RulesModal open={showRules} onClose={() => setShowRules(false)} />}
      {showVideo && <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />}
      {showForm && <InscripcionForm isOpen={showForm} onClose={() => setShowForm(false)} />}
    </div>
  );
}
