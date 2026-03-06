function Rodape() {
  const ano = new Date().getFullYear();

  const links = [
    { label: 'GitHub',   href: 'https://github.com/henrysssilveira' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henryssilveira/' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato',  href: '#contato' },
  ];

  return (
    <footer
      className="relative overflow-hidden py-10
                 px-6 sm:px-10 md:px-12"
      style={{ fontFamily: "'DM Mono', monospace", borderTop: '1px solid #1a1a1a' }}
    >
      <div className="md:ml-16 max-w-5xl">
        {/* Topo: logo + links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5 w-5" style={{ color: '#697A21' }}>
                <path fill="currentColor" d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/>
              </svg>
              <span className="font-black text-lg sm:text-xl" style={{ color: '#f0f0f0', letterSpacing: '-0.02em' }}>HSilveira</span>
            </div>
            <p className="text-xs" style={{ color: '#444', letterSpacing: '0.05em' }}>Frontend Developer & UX/UI Designer</p>
          </div>

          {/* Links — wrap natural em mobile */}
          <nav className="flex flex-wrap gap-4 sm:gap-6">
            {links.map((link, i) => (
              <a
                key={i} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-xs tracking-widest"
                style={{ color: '#444', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#697A21'}
                onMouseLeave={e => e.currentTarget.style.color = '#444'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="my-8" style={{ borderTop: '1px solid #151515' }} />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-xs" style={{ color: '#333', letterSpacing: '0.05em' }}>
            © {ano} Henrique Silveira. Todos os direitos reservados.
          </span>
          <span className="text-xs" style={{ color: '#333', letterSpacing: '0.05em' }}>
            Feito com React + Tailwind
          </span>
        </div>
      </div>

      {/* Detalhe geométrico */}
      <div
        className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 50%, rgba(105,122,33,0.08) 50%)' }}
      />
    </footer>
  );
}

export default Rodape;