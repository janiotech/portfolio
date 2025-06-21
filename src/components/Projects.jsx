import React from 'react';
import '../styles/components.css';
import { FaSearch, FaBrain, FaBug, FaRocket } from 'react-icons/fa';

const projects = [
  {
    icon: <FaSearch size={30} />, title: 'Plagiarism Checker',
    desc: 'Ferramenta para detectar plágio em textos usando NLP e machine learning.'
  },
  {
    icon: <FaBrain size={30} />, title: 'AI Game Bot',
    desc: 'Bot de IA para jogos, com aprendizado por reforço e automação.'
  },
  {
    icon: <FaBug size={30} />, title: 'Data Inspector',
    desc: 'Dashboard para análise e visualização de grandes volumes de dados.'
  },
  {
    icon: <FaRocket size={30} />, title: 'FastAPI Boilerplate',
    desc: 'Template robusto para APIs Java modernas, seguras e escaláveis.'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileinview={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileinview={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whilehover={{ scale: 1.04, boxShadow: '0 8px 32px #FFD60033' }}
          >
            <div className="project-icon">{p.icon}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

