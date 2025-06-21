import React, { useState } from 'react';
import '../styles/components.css';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ nome: '', email: '', mensagem: '' });
  }

  return (
    <section id="contact" className="contact-section">
      <h2
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contato
      </h2>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          value={form.mensagem}
          onChange={handleChange}
          className="contact-textarea"
          required
        />
        <button
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.06, backgroundColor: '#FFD600', color: '#111' }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar
        </button>
        {sent && <span className="contact-success">Mensagem enviada! Obrigado :)</span>}
      </form>
    </section>
  );
}

