"use client";
import React from 'react';
import './Hero.scss';
import ArrowIcon from '../Shared/IconsSvg/ArrowIcon/ArrowIcon';
import Label from '../Shared/Label/Label';
import Link from 'next/link';

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.querySelector('.services-section__content');
    if (nextSection) {
      const offset = -30; 
      const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__label">
            <Label 
              label="Especialistas En Ingeniería Eléctrica" 
              color='#d4ebffff' 
              textColor='#004C99'
            />
          </div>
          <h1 className="hero__title">Ingeniería Que <span className='hero__highlight'>Transforma.</span></h1>
          <h1 className="hero__subtitle">Soluciones Que Perduran.</h1>
          <p className="hero__description">
            Diagnóstico, recuperación y soluciones de ingeniería avanzada que extienden 
            la vida útil de tus activos críticos, optimizan el desempeño operativo y previenen 
            fallas mayores. Especialistas en generación eléctrica, transformamos desafíos técnicos 
            en resultados sostenibles.
          </p>
          <div className='hero__cta-buttons'>
            <button 
              className="hero__more-button button-template" 
              onClick={handleScroll}
            >
              Conoce más
            </button>
            <Link href="/contacto" className='hero__cta-button button-template'>
              Contactanos
            </Link>
          </div>
        </div>
      </div>
      <div className='hero__scroll-indicator' onClick={handleScroll}>
        <ArrowIcon color='#1d1d1d' rotation={-90}/>
      </div>
    </section>
  );
}