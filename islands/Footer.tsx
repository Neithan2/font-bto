export default function Footer() {
  return (
    <footer className="w-full bg-[#1f374f] text-white border-t border-white/20 shadow-[0_-8px_20px_rgba(0,0,0,0.3)] shrink-0 mt-auto">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 w-[90vw] py-8 md:py-[0.6vw]">

        {/* COLUMNA 1: LOGO Y ORGANIZADOR */}
        <div className="flex flex-col items-center gap-2 md:gap-[0.5vw] text-center">
          <img
            src="/img/Logo.svg"
            alt="BTO Q Challenge"
            className="h-auto shrink-0 w-30 md:w-[8vw]"
            loading="lazy"
          />
          <div className="flex flex-col gap-0">
            <p className="raleway uppercase text-white text-[10px] md:text-[0.55vw] tracking-[0.2em]">
              ORGANIZADO POR <span className="text-white">BETOMIN</span>
            </p>
            <p className="raleway uppercase text-[#4ade80] text-[11px] md:text-[0.58vw] tracking-[0.15em]">
              Y SUS MODS
            </p>
          </div>
        </div>

        {/* COLUMNA 2: CONTACTO + EMAIL + CREATED BY */}
        {/*
            USAMOS translate-y para bajar el contenido internamente.
            - md:translate-y-[1vw] lo baja en escritorio.
            - translate-y-2 lo baja en móvil.
        */}
        <div className="flex flex-col items-center gap-6 md:gap-[1.5vw] transform translate-y-2 md:translate-y-[1.2vw]">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-[10vw]">
            {/* CONTACTO */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white gotham font-light tracking-tight text-sm md:text-[1.2vw]">
                Contacto
              </span>
              <span className="raleway font-light text-white whitespace-nowrap text-xs md:text-[1.1vw]">
                Benjamín Barrozo - Betomin
              </span>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white gotham font-light tracking-tight text-sm md:text-[1.2vw]">
                Email
              </span>
              <span className="raleway font-light text-white whitespace-nowrap text-xs md:text-[1.1vw]">
                betomindelpueblo@gmail.com
              </span>
            </div>
          </div>

          <p className="raleway uppercase text-white/40 text-[9px] md:text-[0.65vw] tracking-widest">
            Created by <span className="hover:text-white transition-colors duration-200 cursor-default font-medium">Axel</span>
          </p>
        </div>

        {/* COLUMNA 3: REDES SOCIALES */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-4 md:gap-[1.2vw]">
            {[
              { href: "https://www.twitch.tv", src: "/img/Twitch.svg", alt: "Twitch" },
              { href: "https://www.instagram.com", src: "/img/Instagram.svg", alt: "Instagram" },
              { href: "https://www.tiktok.com", src: "/img/TikTok.svg", alt: "TikTok" },
              { href: "https://www.youtube.com", src: "/img/YouTube.svg", alt: "YouTube" }
            ].map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-125 transition-all duration-200 shrink-0"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="h-auto w-7.5 md:w-[1.9vw] block"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
