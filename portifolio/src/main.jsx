import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './header.jsx'
import Hero from './hero.jsx'
import Projetos from './projects.jsx'
import Sobre from './sobre.jsx'
import Contato from './contato.jsx'
import Rodape from './rodape.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Projetos />
    <Sobre />
    <Contato />
    <Rodape />
  </StrictMode>,
)
