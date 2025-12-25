import { useEffect, useRef, useState } from "preact/hooks";
import Modal from "./Modal.tsx";

const VIDEOS = [
  { id: 1, title: "Trailer Oficial", src: "/img/trailer1.mp4", thumb: "/img/thumb1.jpg" },
  { id: 2, title: "Ahora es Personal", src: "/img/trailer2.mp4", thumb: "/img/thumb2.jpg" },
  { id: 3, title: "Sener vs la BTO", src: "/img/trailer3.mp4", thumb: "/img/thumb3.jpg" },
  { id: 4, title: "Betomin Cae", src: "/img/trailer4.mp4", thumb: "/img/thumb4.jpg" },
];

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const vRef = useRef<HTMLVideoElement>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(VIDEOS[0]);
  const [isP, setIsP] = useState(false);
  const [vol, setVol] = useState(0.5);
  const [prevVol, setPrevVol] = useState(0.5);
  const [prog, setProg] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleTogglePlay = () => {
    const v = vRef.current;
    if (v) v.paused ? v.play() : v.pause();
  };

  const handleToggleMute = () => {
    if (vol > 0) { setPrevVol(vol); setVol(0); }
    else { setVol(prevVol || 0.5); }
  };

  const toggleFullScreen = () => {
    const container = cRef.current;
    if (!container) return;
    if (!document.fullscreenElement) container.requestFullscreen();
    else document.exitFullscreen();
  };

  useEffect(() => { if (vRef.current) vRef.current.volume = vol; }, [vol]);
  useEffect(() => {
    if (isOpen && vRef.current) {
      vRef.current.play().catch(() => {
        if (vRef.current) { vRef.current.muted = true; vRef.current.play(); }
      });
    }
  }, [isOpen, cur]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[90vw] md:max-w-[80vw]">
      <div ref={cRef} className="flex flex-col md:flex-row w-full bg-(--color-azul) rounded-xl overflow-hidden border border-(--color-dorado)/5 shadow-2xl h-auto md:h-[85vh]">
        <div className="flex-2 lg:flex-3 flex flex-col min-w-0 bg-black">
          <div className="flex-1 relative flex items-center justify-center bg-black overflow-hidden">
            <video
              ref={vRef}
              src={cur.src}
              autoPlay
              playsInline
              onLoadedMetadata={(e) => setDuration(formatTime(e.currentTarget.duration))}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setProg((v.currentTime / v.duration) * 100 || 0);
                setCurrentTime(formatTime(v.currentTime));
              }}
              onPlay={() => setIsP(true)}
              onPause={() => setIsP(false)}
              className="w-full h-full object-contain cursor-pointer"
              onClick={handleTogglePlay}
            />
          </div>

          <div className="h-20 md:h-[12vh] min-h-20 w-full bg-(--color-azul) shrink-0 border-t border-white/10 relative flex flex-col justify-center">

            <div className="absolute top-0 left-0 w-full h-2 bg-black/40 -translate-y-full">
              <input
                type="range" step="0.1" value={prog}
                onInput={(e) => {
                  const v = vRef.current;
                  if (v) v.currentTime = (parseFloat(e.currentTarget.value) / 100) * v.duration;
                }}
                className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-pointer"
              />
              <div className="absolute top-0 left-0 h-full bg-(--color-dorado)" style={{ width: `${prog}%` }} />
            </div>

            <div className="px-6 md:px-[2vw] flex justify-between items-center gap-4">
              <div className="flex items-center gap-4 md:gap-[2vw]">
                <button type="button" onClick={handleTogglePlay} className="text-(--color-dorado) shrink-0">
                  {isP ? (
                    <svg className="w-8 h-8 md:w-[3vw] md:h-[3vw] min-w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  ) : (
                    <svg className="w-8 h-8 md:w-[3vw] md:h-[3vw] min-w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>

                <div className="text-(--color-blanco) gotham text-sm md:text-[1.2vw] min-text-[14px] font-black italic">
                  <span className="text-(--color-dorado)">{currentTime}</span>
                  <span className="mx-1 opacity-30">/</span>
                  <span className="opacity-60">{duration}</span>
                </div>

                <div className="hidden lg:flex items-center gap-[1vw] bg-black/30 px-[1.2vw] py-[0.8vh] rounded-full">
                  <button type="button" onClick={handleToggleMute} className="text-(--color-dorado) hover:scale-110 transition-transform shrink-0">
                    {vol === 0 ? (
                      <svg className="w-[1.8vw] h-[1.8vw] min-w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.38.29-.81.52-1.25.68v2.06c1.02-.22 1.95-.66 2.75-1.25L19.73 21 21 19.73l-8.47-8.47L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    ) : (
                      <svg className="w-[1.8vw] h-[1.8vw] min-w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    )}
                  </button>
                  <input
                    type="range" min="0" max="1" step="0.01" value={vol}
                    onInput={(e) => setVol(parseFloat(e.currentTarget.value))}
                    className="appearance-none bg-white/20 h-[0.5vh] min-h-1.25 rounded-lg cursor-pointer w-[8vw] min-w-17.5"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--color-dorado) ${vol * 100}%, transparent ${vol * 100}%)`,
                      backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button type="button" onClick={toggleFullScreen} className="text-white/40 hover:text-(--color-dorado)">
                  <svg className="w-6 h-6 md:w-[2vw] md:h-[2vw] min-w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="gotham bg-transparent text-white border border-white/30 hover:border-white transition-colors px-[2vw] py-[0.8vh] min-w-25 text-[10px] md:text-[0.9vw] uppercase italic font-black tracking-widest"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[30vw] lg:w-[25vw] md:min-w-75 shrink-0 flex flex-col bg-(--color-azul) border-t md:border-t-0 md:border-l border-(--color-dorado)/20">
          <div className="p-4 md:p-[2vh] border-b border-(--color-dorado)/10 shrink-0 text-center">
            <h3 className="text-(--color-dorado) gothamU italic uppercase tracking-widest text-base md:text-[1.4vw]">Playlist</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[40vh] md:max-h-none">
            {VIDEOS.map((v) => (
              <button key={v.id} type="button" onClick={() => setCur(v)} className={`flex gap-3 md:gap-[1vw] p-2 md:p-[1vh] rounded-xl w-full border-2 transition-all ${cur.id === v.id ? "border-red-600 bg-red-600/10 scale-[1.02]" : "border-transparent hover:bg-white/5"}`}>
                <div className="relative w-20 md:w-[8vw] aspect-video shrink-0 rounded-lg overflow-hidden bg-black shadow-lg">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-left flex flex-col justify-center overflow-hidden">
                  <p className={`raleway text-[10px] md:text-[1vw] font-black uppercase italic truncate ${cur.id === v.id ? 'text-red-500' : 'text-white'}`}>{v.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}