import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/components.css';
import avatar from '../assets/avatar.png'; // Coloque sua imagem em assets/avatar.png

export default function About() {
  return (
    <section id="about" className="about-section">
      <div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img src={avatar} alt="Avatar Aden" className="about-avatar" />
        <h2 className="about-title">Sobre mim</h2>
        <p className="about-bio">
          Olá! Sou Aden, desenvolvedor Python apaixonado por tecnologia, IA e automação. Tenho experiência em projetos de Machine Learning, Web, Games e Data Analytics. Busco sempre criar soluções elegantes, eficientes e inovadoras.
        </p>
        <div className="about-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="about-social-icon"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="about-social-icon"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="about-social-icon"><FaTwitter /></a>
        </div>
      </div>SS
    </section>
  );
}

