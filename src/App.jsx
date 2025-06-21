import React from "react";
import "./index.css";
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhatIDo />
      <Projects />
      {/* Demais seções virão aqui */}
      <Footer />
    </>
  );
}

export default App;
