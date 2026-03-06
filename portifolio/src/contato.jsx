import { useState } from 'react';

function Contato() {
  const [form, setForm]     = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [focado, setFocado]   = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nome || !form.email || !form.mensagem) return;
    console.log('Formulário enviado:', form);
    setEnviado(true);
    setForm({ nome: '', email: '', mensagem: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  const inputStyle = (campo) => ({
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focado === campo ? '#697A21' : '#2a2a2a'}`,
    color: '#f0f0f0',
    padding: '10px 0',
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
    fontFamily: "'DM Mono', monospace",
    transition: 'border-color 0.3s ease',
    letterSpacing: '0.03em',
  });

  const links = [
    { label: 'GitHub',   href: 'https://github.com/henrysssilveira' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henryssilveira/' },
    { label: 'E-mail',   href: 'mailto:seu@email.com' },
  ];

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-20
                 px-6 sm:px-10 md:px-12"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* Linha decorativa */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, #697A21 30%, #697A21 70%, transparent)' }} />
      <span className="hidden md:block absolute left-12 top-1/2 text-xs"
        style={{ color: '#697A21', writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)', letterSpacing: '0.3em' }}>
        04 — CONTACT
      </span>

      <div className="md:ml-16 max-w-5xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-widest mb-3" style={{ color: '#697A21' }}>GET IN TOUCH</p>
          <h2
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            Let's Work<br /><span style={{ color: '#697A21' }}>Together.</span>
          </h2>
        </div>

        {/* Grid: 1 coluna mobile, 2 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Formulário */}
          <div className="flex flex-col gap-8">
            {[
              { name: 'nome',      label: 'NOME',     placeholder: 'Seu nome',          type: 'input' },
              { name: 'email',     label: 'EMAIL',    placeholder: 'seu@email.com',      type: 'input' },
              { name: 'mensagem',  label: 'MENSAGEM', placeholder: 'Conte sobre seu projeto...', type: 'textarea' },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <label className="text-xs tracking-widest block mb-2" style={{ color: '#555' }}>{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    name={name} value={form[name]} onChange={handleChange} rows={4}
                    placeholder={placeholder} style={{ ...inputStyle(name), resize: 'none' }}
                    onFocus={() => setFocado(name)} onBlur={() => setFocado(null)}
                  />
                ) : (
                  <input
                    name={name} value={form[name]} onChange={handleChange}
                    placeholder={placeholder} style={inputStyle(name)}
                    onFocus={() => setFocado(name)} onBlur={() => setFocado(null)}
                  />
                )}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="self-start text-xs sm:text-sm font-bold tracking-widest px-6 sm:px-8 py-3 cursor-pointer"
              style={{
                background: enviado ? '#2a3a0a' : '#697A21',
                color: enviado ? '#a0c040' : '#fff',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                letterSpacing: '0.1em',
                border: 'none',
                fontFamily: "'DM Mono', monospace",
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => { if (!enviado) e.currentTarget.style.background = '#5a6b1c'; }}
              onMouseLeave={e => { if (!enviado) e.currentTarget.style.background = enviado ? '#2a3a0a' : '#697A21'; }}
            >
              {enviado ? 'ENVIADO ✓' : 'ENVIAR →'}
            </button>
          </div>

          {/* Links + status */}
          <div className="flex flex-col justify-between gap-10 md:gap-0">
            <div>
              <p className="text-xs tracking-widest mb-6" style={{ color: '#697A21', letterSpacing: '0.2em' }}>FIND ME ON</p>
              <div className="flex flex-col">
                {links.map((link, i) => (
                  <a
                    key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex justify-between items-center py-4"
                    style={{ borderBottom: '1px solid #1a1a1a', color: '#666', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f0f0f0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#666'}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: '#697A21' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-5 sm:p-6"
              style={{
                border: '1px solid #1e1e1e',
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
                background: 'rgba(105,122,33,0.04)',
              }}
            >
              <p className="text-xs tracking-widest mb-2" style={{ color: '#697A21' }}>STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#697A21] animate-pulse inline-block flex-shrink-0" />
                <span className="text-xs sm:text-sm" style={{ color: '#888' }}>Disponível para projetos freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid decorativo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(105,122,33,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(105,122,33,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  );
}

export default Contato;