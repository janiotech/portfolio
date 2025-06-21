import React, { useEffect, useState } from 'react';
import '../styles/components.css';

const Hero = () => {
  const fullText = ["Developer Full Stack","Developer Java"];
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [indexText, setIndexText] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ifCurrentIndex, setIfCurrentIndex] = useState(false);

  useEffect(() => {
    let typingInterval;
    let pauseTimeout;
    let deletingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if(currentIndex < fullText[indexText].length && !ifCurrentIndex) {
          setDisplayedText(fullText[indexText].slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
        if (currentIndex === fullText[indexText].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIfCurrentIndex(true);
            startDeleting();
          }, 2000); // pausa de 5 segundos
        }
      }, 80);
    };

    const startDeleting = () => {
      deletingInterval = setInterval(() => {
        setDisplayedText(fullText[indexText].slice(0, currentIndex));
        if(currentIndex > 0){
          setCurrentIndex(currentIndex - 1);
        }
        if (currentIndex === 0) {
          clearInterval(deletingInterval);
          setTimeout(() => {
            if(indexText < fullText.length - 1) {
              setIndexText(indexText + 1);
            }else{
              setIndexText(0);
            }
            startTyping();
          }, 300); // pequena pausa antes de recomeçar
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [fullText, indexText, currentIndex, ifCurrentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">DEVELOPER</h1>
        <div className="hero-subtitle">
          {displayedText}
          <span style={{
            display: "inline-block",
            width: "1ch",
            color: "#333",
            animation: "blink 1s steps(1) infinite"
          }}>
            {showCursor ? "|" : "\u00A0"}
          </span>
        </div>
        <p className="hero-desc">
          Desenvolvedor full stack com paixão por Java e JavaScript, moldando experiências digitais com back-ends robustos e interfaces dinâmicas que impulsionam a inovação.
        </p>
      </div>
    </section>
  );
};

export default Hero;
