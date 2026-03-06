import { useEffect, useState } from 'react';

function Hero() {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Frontend Developer', 'UX/UI Designer', 'Systems Builder'];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen overflow-hidden
                 px-6 sm:px-10 md:px-12"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* Linha decorativa vertical — oculta em mobile */}
      <div
        className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, #697A21 30%, #697A21 70%, transparent)' }}
      />
      <span
        className="hidden md:block absolute left-12 top-1/2 text-xs"
        style={{
          color: '#697A21',
          writingMode: 'vertical-rl',
          transform: 'translateY(-50%) rotate(180deg)',
          letterSpacing: '0.3em',
        }}
      >
        01 — INTRO
      </span>

      {/* Conteúdo */}
      <div
        className="md:ml-16 max-w-3xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-5 px-3 py-1 text-xs tracking-widest"
          style={{
            border: '1px solid #697A21',
            color: '#697A21',
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#697A21] animate-pulse inline-block" />
          AVAILABLE FOR WORK
        </div>

        {/* Nome */}
        <h1
          className="font-black leading-none mb-2"
          style={{
            fontSize: 'clamp(2.8rem, 10vw, 6rem)',
            letterSpacing: '-0.02em',
            color: '#f0f0f0',
          }}
        >
          Henrique
          <br />
          <span style={{ color: '#697A21' }}>Silveira</span>
        </h1>

        {/* Role rotativo */}
        <div className="h-9 flex items-center mb-8 overflow-hidden">
          <span
            className="text-base sm:text-xl font-light tracking-wide"
            style={{ color: '#888' }}
            key={roleIndex}
          >
            — {roles[roleIndex]}
          </span>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={scrollToProjects}
            className="font-bold text-xs sm:text-sm tracking-widest px-5 sm:px-6 py-3 cursor-pointer"
            style={{
              background: '#697A21',
              color: '#fff',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              letterSpacing: '0.1em',
              border: 'none',
              fontFamily: "'DM Mono', monospace",
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#5a6b1c'}
            onMouseLeave={e => e.currentTarget.style.background = '#697A21'}
          >
            VIEW PROJECTS
          </button>
          <a
            href="https://github.com/henrysssilveira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm tracking-widest px-5 sm:px-6 py-3"
            style={{
              color: '#aaa',
              border: '1px solid #333',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#697A21'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#aaa'; }}
          >
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* Seta scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 0.6s' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-7 w-7 animate-bounce" style={{ color: '#697A21' }}>
          <path fill="currentColor" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"/>
        </svg>
      </div>

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(105,122,33,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(105,122,33,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  );
}

export default Hero;