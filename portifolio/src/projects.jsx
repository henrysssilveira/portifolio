import Card from '../templates/card.jsx';

function Projetos() {
  const projetos = [
    { title: "ERP — AgroTech",        description: "Sistema ERP para empresa do setor agrícola com módulos de estoque, vendas, compras e finanças. React + Node.js + SQL.", imageUrl: "https://picsum.photos/600/400?random=10", projectUrl: "https://example.com/project1" },
    { title: "MotorControl",           description: "Gerenciamento de locação de veículos com cadastro, reservas, disponibilidade e relatórios financeiros.",                  imageUrl: "https://picsum.photos/600/400?random=20", projectUrl: "https://example.com/project2" },
    { title: "PhotoUploader",          description: "Plataforma de upload de fotos temporárias com geração de links e controle de duração.",                                   imageUrl: "https://picsum.photos/600/400?random=30", projectUrl: "https://example.com/project3" },
    { title: "Rahamim Acamps",         description: "Landing page para retiro espiritual com formulário de inscrição, galeria e redes sociais.",                               imageUrl: "https://picsum.photos/600/400?random=40", projectUrl: "https://example.com/project4" },
    { title: "Diário de Sonhos",       description: "CRUD de gerenciamento de sonhos com autenticação e armazenamento em banco NoSQL.",                                        imageUrl: "https://picsum.photos/600/400?random=50", projectUrl: "https://example.com/project5" },
    { title: "Portfólio Pessoal",      description: "Portfólio com seções de introdução, projetos, habilidades e contato. Design responsivo em React.",                       imageUrl: "https://picsum.photos/600/400?random=60", projectUrl: "https://example.com/project6" },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20
                 px-6 sm:px-10 md:px-12"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* Linha decorativa */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, #697A21 30%, #697A21 70%, transparent)' }} />
      <span className="hidden md:block absolute left-12 top-1/2 text-xs"
        style={{ color: '#697A21', writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)', letterSpacing: '0.3em' }}>
        03 — PROJECTS
      </span>

      <div className="md:ml-16 max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <div>
            <p className="text-xs tracking-widest mb-3" style={{ color: '#697A21' }}>SELECTED WORK</p>
            <h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
            >
              My Best<br /><span style={{ color: '#697A21' }}>Projects.</span>
            </h2>
          </div>
          <span className="hidden sm:block text-xs tracking-widest" style={{ color: '#333' }}>
            {String(projetos.length).padStart(2, '0')} PROJECTS
          </span>
        </div>

        <div className="mb-10" style={{ borderTop: '1px solid #1e1e1e' }} />

        {/* Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div
          id="projects-section"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: '#0a0a0a', border: '1px solid #1e1e1e' }}
        >
          {projetos.map((projeto, index) => (
            <div key={index} style={{ background: '#0a0a0a', padding: '1px' }}>
              <Card {...projeto} index={index} />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-5">
          <a
            href="https://github.com/henrysssilveira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest"
            style={{ color: '#333', letterSpacing: '0.2em', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#697A21'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}
          >
            ALL PROJECTS — GITHUB ↗
          </a>
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

export default Projetos;