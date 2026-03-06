import { useState } from 'react';

function Card({ title, description, imageUrl, projectUrl, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="relative overflow-hidden cursor-pointer w-full"
      style={{
        background: '#111',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
        border: `1px solid ${hovered ? '#697A21' : '#1e1e1e'}`,
        transition: 'border-color 0.3s ease',
        fontFamily: "'DM Mono', monospace",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden" style={{ height: '180px' }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transition: 'transform 0.6s ease, filter 0.4s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            filter: hovered ? 'brightness(0.25) saturate(0.5)' : 'brightness(0.6) saturate(0.8)',
          }}
        />

        {/* Número grande */}
        <span
          className="absolute top-3 left-3 font-black leading-none select-none"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            color: hovered ? 'rgba(105,122,33,0.5)' : 'rgba(105,122,33,0.22)',
            transition: 'color 0.3s ease',
          }}
        >
          {num}
        </span>

        {/* Overlay hover */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center px-5 text-center gap-3"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#ddd' }}>{description}</p>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2 tracking-widest"
            style={{
              background: '#697A21',
              color: '#fff',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
              letterSpacing: '0.08em',
            }}
          >
            VER PROJETO ↗
          </a>
        </div>
      </div>

      {/* Rodapé do card */}
      <div
        className="px-4 py-3 flex justify-between items-center"
        style={{ borderTop: '1px solid #1e1e1e' }}
      >
        <span
          className="text-xs sm:text-sm font-bold truncate"
          style={{ color: hovered ? '#f0f0f0' : '#888', transition: 'color 0.3s ease', maxWidth: '85%' }}
        >
          {title}
        </span>
        <span style={{ color: '#697A21', transition: 'transform 0.3s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>→</span>
      </div>

      {/* Triângulo decorativo */}
      <div
        className="absolute bottom-0 right-0"
        style={{ width: '24px', height: '24px', background: '#0a0a0a', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
    </article>
  );
}

export default Card;