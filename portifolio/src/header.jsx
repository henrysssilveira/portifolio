import { useState } from "react";
import "./index.css";

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
      <path fill="rgb(255,255,255)" d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/>
    </svg>
    <span className="text-xl sm:text-2xl font-bold text-white">HSilveira</span>
  </div>
);

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { label: 'Github',   href: 'https://github.com/henrysssilveira', externo: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henryssilveira/', externo: true },
    { label: 'Projetos', href: '#projects', externo: false },
  ];

  return (
    <header className="flex justify-center text-white sticky top-0 z-50 px-4">

      {/* ── DESKTOP: pill flutuante ── */}
      <div className="hidden sm:flex justify-between items-center gap-4 mt-3 py-3 px-5 glass-card max-w-2xl w-full rounded-full">
        <Logo />
        <nav className="flex gap-4 text-base items-center">
          {links.map(({ label, href, externo }) => (
            <a
              key={label} href={href}
              target={externo ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="hover:text-[#697A21] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[#697A21] hover:bg-[#5a6b1c] transition-colors py-2 px-4 rounded-full text-white ml-2"
          >
            Contato
          </a>
        </nav>
      </div>

      {/* ── MOBILE: barra full-width + hamburger ── */}
      <div className="flex sm:hidden justify-between items-center w-full mt-3 py-3 px-4 glass-card rounded-2xl">
        <Logo />

        {/* Botão hamburguer */}
        <button
          onClick={() => setMenuAberto(v => !v)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
          aria-label="Menu"
        >
          <span
            className="block h-0.5 bg-white transition-all duration-300 origin-center"
            style={{
              width: '22px',
              transform: menuAberto ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 bg-white transition-all duration-300"
            style={{ width: '22px', opacity: menuAberto ? 0 : 1 }}
          />
          <span
            className="block h-0.5 bg-white transition-all duration-300 origin-center"
            style={{
              width: '22px',
              transform: menuAberto ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Menu mobile dropdown */}
      <div
        className="sm:hidden absolute top-full left-4 right-4 glass-card rounded-2xl overflow-hidden"
        style={{
          marginTop: '6px',
          maxHeight: menuAberto ? '300px' : '0',
          transition: 'max-height 0.35s ease',
        }}
      >
        <nav className="flex flex-col p-4 gap-1">
          {links.map(({ label, href, externo }) => (
            <a
              key={label} href={href}
              target={externo ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={() => setMenuAberto(false)}
              className="py-3 px-2 text-base hover:text-[#697A21] transition-colors border-b border-white/10 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="mt-2 bg-[#697A21] hover:bg-[#5a6b1c] transition-colors py-3 px-4 rounded-full text-center text-white font-medium"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;