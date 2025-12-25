interface PrizeProps {
  label: string;
  sponsor: string;
  image: string;
  prizeTitle: string;
  prizeDesc: string;
  position: string;
  footerText?: string;
  isSpecial?: boolean;
}

export default function PrizeCard(props: PrizeProps) {
  const getPositionColor = (pos: string) => {
    switch (pos) {
      case "1": return "bg-[#FFD700] shadow-[0_0_1.3vw_rgba(255,215,0,0.4)]";
      case "2": return "bg-[#C0C0C0] shadow-[0_0_1.3vw_rgba(192,192,192,0.4)]";
      case "3": return "bg-[#CD7F32] shadow-[0_0_1.3vw_rgba(205,127,50,0.4)]";
      default: return "bg-[#dfb760]";
    }
  };

  return (
    <div
      className="flex flex-col bg-white overflow-hidden shadow-2xl w-[12.5vw] shrink-0 rounded-[2.4vw] aspect-[1/2.2]"
    >
      {/* 1. ETIQUETA LUGAR */}
      <div className="pt-[15%] pb-[8%] flex flex-col items-center">
        <span className="text-[1.1vw] gotham text-[#1f374f] text-center uppercase leading-tight">
          {props.label.split(' ').map((word) => (
            <span key={word} className="block">{word}</span>
          ))}
        </span>
      </div>

      {/* 2. IMAGEN CIRCULAR */}
      <div className="flex justify-center">
        <div className="w-[7.2vw] h-[7.2vw] border-[0.25vw] rounded-full border-[#1f374f] overflow-hidden bg-gray-100">
          <img src={props.image} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 3. SPONSOR */}
      <div className="flex flex-col items-center pt-[10%] italic">
        <span className="text-[1vw] gotham text-[#1f374f] font-bold uppercase">
          {props.sponsor}
        </span>
      </div>

      {/* 4. FRANJA AZUL */}
      <div className="mt-[12%] bg-[#1f374f] py-[8%] flex flex-col items-center text-white">
        <span className="text-[1.2vw] ralewayL font-black uppercase tracking-widest">
          {props.prizeTitle}
        </span>
        <span className="text-[0.9vw] ralewayL uppercase opacity-90 font-bold">
          {props.prizeDesc}
        </span>
      </div>

      {/* 5. FOOTER */}
      <div className={`grow flex flex-col items-center justify-center ${props.isSpecial ? '' : 'p-[5%]'}`}>
        {props.isSpecial ? (
          <div className={`${getPositionColor("?")} w-full h-full flex items-center justify-center text-[#121213] text-center leading-tight uppercase font-bold text-[0.8vw] p-[0.8vw]`}>
            {props.footerText}
          </div>
        ) : (
          <div className={`${getPositionColor(props.position)} text-white flex items-center justify-center gothamU rounded-full shadow-xl border-[0.25vw] border-white/20 w-[4.1vw] h-[4.1vw] text-[2.4vw]`}>
            {props.position}
          </div>
        )}
      </div>
    </div>
  );
}
