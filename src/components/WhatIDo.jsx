import React from 'react';
import { FaRobot, FaGamepad, FaChartBar, FaGlobe, FaCogs } from 'react-icons/fa';
import '../styles/components.css';

const skills = [
  {
    icon: <FaRobot size={38} />, title: 'Machine Learning',
    desc: 'Modelos inteligentes, IA aplicada e soluções preditivas.'
  },
  {
    icon: <FaGamepad size={38} />, title: 'Game Development',
    desc: 'Jogos interativos e experiências imersivas com Lua.'
  },
  {
    icon: <FaChartBar size={38} />, title: 'Data Analytics',
    desc: 'Análise de dados, dashboards e visualização avançada.'
  },
  {
    icon: <FaGlobe size={38} />, title: 'Web Development',
    desc: 'APIs, sites dinâmicos e aplicações web modernas.'
  },
  {
    icon: <FaCogs size={38} />, title: 'Automation',
    desc: 'Automação de tarefas, bots e scripts eficientes.'
  },
];

export default function WhatIDo() {
  return (
    <section id="whatido" className="whatido-section">
      <h2
        className="whatido-title"
        initial={{ opacity: 0, y: 30 }}
        whileinview={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        O que eu faço
      </h2>
      <div className="whatido-grid">
        {skills.map((s, i) => (
          <div
            className="whatido-card"
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileinview={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whilehover={{ scale: 1.05, boxShadow: '0 8px 32px #FFD60033' }}
          >
            <div className="whatido-icon">{s.icon}</div>
            <h3 className="whatido-card-title">{s.title}</h3>
            <p className="whatido-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

