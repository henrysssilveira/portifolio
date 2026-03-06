function Sobre() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend',  items: ['Node.js', 'Express', 'SQL', 'NoSQL', 'REST APIs', 'Python', 'Flask'] },
    { category: 'Design',   items: ['Figma', 'UX Research', 'Prototipação', 'Design System', 'Wireframes','Prototipação', 'Design System', 'Flowchart'] },
    { category: 'Tools',    items: ['Git', 'Vite', 'Docker', 'Linux', 'VS Code', 'MacOS', 'Windows', 'n8n'] },
  ];

  const experiencia = [
    {
      ano: '2024 — atual',
      titulo: 'Frontend Developer',
      local: 'Projetos Freelance',
      desc: 'Desenvolvimento de sistemas web para clientes dos setores agrícola, automotivo e educacional.',
    },
    {
      ano: '2023',
      titulo: 'UX/UI Designer',
      local: 'Projetos Pessoais',
      desc: 'Prototipação e design de interfaces com foco em usabilidade e identidade visual.',
    },
    {
      ano: '2022 — atual',
      titulo: 'Gestão de TI',
      local: 'Graduação',
      desc: 'Curso de Gestão de Tecnologia da Informação com foco em sistemas, infraestrutura e desenvolvimento.',
    },
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-20
                 px-6 sm:px-10 md:px-12"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* Linha decorativa — oculta em mobile */}
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
        02 — ABOUT
      </span>

      <div className="md:ml-16 max-w-5xl">
        {/* Título */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-widest mb-3" style={{ color: '#697A21' }}>WHO I AM</p>
          <h2
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            About<br /><span style={{ color: '#697A21' }}>Me.</span>
          </h2>
        </div>

        {/* Grid — 1 coluna mobile, 2 colunas desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Experiência */}
          <div>
            <p className="text-xs tracking-widest mb-8" style={{ color: '#697A21', letterSpacing: '0.2em' }}>
              EXPERIENCE & EDUCATION
            </p>
            <div className="flex flex-col">
              {experiencia.map((item, i) => (
                <div key={i} className="relative pl-6 pb-10" style={{ borderLeft: '1px solid #2a2a2a' }}>
                  <div
                    className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2"
                    style={{ background: '#697A21', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  />
                  <span className="text-xs tracking-widest block mb-1" style={{ color: '#697A21' }}>{item.ano}</span>
                  <h3 className="font-bold text-sm sm:text-base mb-0.5" style={{ color: '#f0f0f0' }}>{item.titulo}</h3>
                  <span className="text-xs mb-2 block" style={{ color: '#555' }}>{item.local}</span>
                  <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs tracking-widest mb-8" style={{ color: '#697A21', letterSpacing: '0.2em' }}>
              SKILLS & TECHNOLOGIES
            </p>
            <div className="flex flex-col gap-6 md:gap-8">
              {skills.map((group, i) => (
                <div key={i}>
                  <p className="text-xs mb-3" style={{ color: '#555', letterSpacing: '0.15em' }}>
                    {group.category.toUpperCase()}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 tracking-wide cursor-default"
                        style={{
                          border: '1px solid #2a2a2a',
                          color: '#bbb',
                          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                          background: 'rgba(105,122,33,0.06)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = '#697A21';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.background = 'rgba(105,122,33,0.2)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = '#2a2a2a';
                          e.currentTarget.style.color = '#bbb';
                          e.currentTarget.style.background = 'rgba(105,122,33,0.06)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(105,122,33,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(105,122,33,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  );
}

export default Sobre;