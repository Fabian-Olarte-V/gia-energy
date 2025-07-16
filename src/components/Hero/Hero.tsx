import React from 'react';
import './Hero.scss';
import ArrowIcon from '../Shared/IconsSvg/ArrowIcon/ArrowIcon';

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.querySelector('.services-section');
    if (nextSection) {
      const offset = -30; 
      const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <video className="hero__video" autoPlay loop muted>
        <source src="/assets/videos/Hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero__overlay"></div> 
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">Ingeniería Que Transforma.</h1>
          <h1 className="hero__subtitle">Soluciones Que Perduran.</h1>
          <p className="hero__description">
            Diagnóstico, recuperación y soluciones de ingeniería avanzada que extienden 
            la vida útil de tus activos críticos, optimizan el desempeño operativo y previenen 
            fallas mayores. Especialistas en generación eléctrica, transformamos desafíos técnicos 
            en resultados sostenibles.
          </p>
          <button 
            className="hero__cta-button button-template" 
            onClick={handleScroll}
          >
            Conoce más
          </button>
        </div>
      </div>
      <div className='hero__scroll-indicator' onClick={handleScroll}>
        <ArrowIcon color='#fff' rotation={-90}/>
      </div>
    </section>
  );
}