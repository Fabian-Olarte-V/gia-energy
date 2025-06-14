import React from 'react';
import './Hero.scss';

export default function Hero() {
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
            Lleva tus activos al siguiente nivel con soluciones de diagnóstico, 
            recuperación y automatización que mejoran el rendimiento, 
            reducen costos y alargan la vida útil de tus equipos 
            todo con ingeniería experta y confiable.
          </p>
          <button className="hero__cta-button">Conoce más</button>
        </div>
      </div>
    </section>
  );
}