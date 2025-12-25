import { useState } from "preact/hooks";
import { JSX } from "preact";
import Modal from "../components/Modal.tsx";

const FORM_URL = "https://docs.google.com/forms/d/e/TU_ID_AQUI/formResponse";

type FormState = { riotId: string; region: string; twitch: string; streameas: string; discord: string; };

const validate = (name: string, value: string) => {
  if (!value) return;
  if (name === "riotId" && !value.includes("#BTOQ")) return "Falta #BTOQ";
  if (name === "twitch" && value.includes("http")) return "Solo usuario";
  return;
};

export default function InscripcionForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState<FormState>({ riotId: "", region: "", twitch: "", streameas: "", discord: "" });
  const [warns, setWarns] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const { name, value } = e.currentTarget;
    setForm(p => ({ ...p, [name]: value }));
    setWarns(p => ({ ...p, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    if (Object.values(form).some(v => !v) || Object.values(warns).some(v => v)) return setStatus("error");

    const payload = new URLSearchParams({
      "entry.1221956897": form.riotId, "entry.1865107259": form.region,
      "entry.1448078224": form.twitch, "entry.494061001": form.streameas, "entry.996253528": form.discord
    });

    try {
      await fetch(FORM_URL, { method: "POST", body: payload, mode: "no-cors" });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  // CLASES ELÁSTICAS: Usan vw para escalar con la pantalla
  const inputCls = (n: string) => `w-full bg-[#1b3149] border-2 rounded-[1vw] p-[1vw] md:p-[0.8vw] text-[3.5vw] md:text-[1vw] text-white outline-none transition-all ${warns[n] ? 'border-red-500' : 'border-white/10 focus:border-[#dfb760]'}`;

  const radioCls = (a: boolean) => `flex-1 cursor-pointer text-[3vw] md:text-[0.8vw] py-[1vh] rounded-[0.5vw] font-black text-center transition-all ${a ? 'bg-[#dfb760] text-[#1f374f]' : 'text-white/40'}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[90vw] md:max-w-[40vw]">
      <form onSubmit={handleSubmit} className="w-full bg-[#1f374f] rounded-xl overflow-hidden shadow-2xl">

        {/* Banner Superior Proporcional */}
        <div className="w-full h-[15vh] md:h-[20vh] bg-cover bg-center border-b border-[#dfb760]/30" style={{ backgroundImage: 'url("/img/1.png")' }} />

        <div className="flex flex-col gap-[2vh] p-[5vw] md:p-[2.5vw]">
          <h1 className="text-[5vw] md:text-[1.5vw] text-center text-[#dfb760] font-black uppercase tracking-[0.2em]">
            INSCRIPCIÓN 2026
          </h1>

          {/* Fila RiotID y Región */}
          <div className="flex flex-col md:flex-row gap-[2vh] md:gap-[1.5vw] items-end">
            <div className="w-full md:flex-1 relative">
              <input name="riotId" placeholder="Riot ID" onInput={handleChange} className={inputCls("riotId")} />
              {warns.riotId && <span className="absolute right-[1vw] top-1/2 -translate-y-1/2 text-[2.5vw] md:text-[0.7vw] text-red-400 font-bold uppercase">{warns.riotId}</span>}
            </div>
            <div className="w-full md:w-[12vw] flex flex-col gap-[0.5vh]">
              <label className="text-[#dfb760] text-[3vw] md:text-[0.7vw] font-black text-center uppercase">Región</label>
              <div className="flex bg-[#1b3149] rounded-[1vw] p-[0.3vw] border-2 border-white/10 h-[6vh] md:h-[5vh] items-center">
                {["LAS", "LAN", "BR"].map(r => (
                  <label key={r} className={radioCls(form.region === r)}>
                    <input type="radio" name="region" value={r} className="hidden" onClick={handleChange} /> {r}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Fila Discord y Stream */}
          <div className="flex flex-col md:flex-row gap-[2vh] md:gap-[1.5vw] items-end">
            <div className="w-full md:flex-1 relative">
              <input name="discord" placeholder="Discord/ID" onInput={handleChange} className={inputCls("discord")} />
            </div>
            <div className="w-full md:w-[12vw] flex flex-col gap-[0.5vh]">
              <label className="text-[#dfb760] text-[3vw] md:text-[0.7vw] font-black text-center uppercase">¿Streameas?</label>
              <div className="flex bg-[#1b3149] rounded-[1vw] p-[0.3vw] border-2 border-white/10 h-[6vh] md:h-[5vh] items-center">
                {["SI", "NO"].map(s => (
                  <label key={s} className={radioCls(form.streameas === s)}>
                    <input type="radio" name="streameas" value={s} className="hidden" onClick={handleChange} /> {s}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <input name="twitch" placeholder="Usuario de Twitch" onInput={handleChange} className={inputCls("twitch")} />

          {/* Banner Inferior Proporcional */}
          <div className="h-[8vh] md:h-[12vh] w-full bg-cover bg-center opacity-80 rounded-[1vw] border border-white/5" style={{ backgroundImage: 'url("/img/2.png")' }} />

          {/* Botones */}
          <div className="grid grid-cols-2 gap-[1.5vw] mt-[1vh]">
            <button type="submit" className="bg-[#dfb760] text-[#1f374f] rounded-[1vw] py-[1.5vh] font-black text-[3vw] md:text-[0.9vw] uppercase shadow-lg active:scale-95 transition-all">
              REGISTRARSE
            </button>
            <button type="button" onClick={onClose} className="border-2 border-white/20 text-white rounded-[1vw] py-[1.5vh] font-black text-[3vw] md:text-[0.9vw] uppercase hover:bg-white/5 transition-all">
              CERRAR
            </button>
          </div>
        </div>
      </form>

      {/* MODAL DE STATUS ELÁSTICO */}
      {status !== "idle" && (
        <div className="fixed inset-0 z-300 flex items-center justify-center bg-[#1f374f]/95 backdrop-blur-md p-[5vw]">
          <div className={`p-[4vw] rounded-[2vw] text-center w-full max-w-[80vw] md:max-w-[20vw] bg-white border-b-[1vh] ${status === 'success' ? 'border-green-500' : 'border-red-500 shadow-2xl shadow-red-500/20'}`}>
            <p className="text-[#1f374f] font-black mb-[3vh] text-[4vw] md:text-[1vw] uppercase tracking-tighter">
              {status === 'success' ? "¡Registro Exitoso!" : "Revisa tus datos"}
            </p>
            <button type="button" onClick={() => { setStatus("idle"); if(status==='success') onClose(); }} className="bg-[#1f374f] text-white w-full py-[1.5vh] rounded-[1vw] font-black text-[3.5vw] md:text-[0.8vw] uppercase transition-transform active:scale-95">
              ENTENDIDO
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}