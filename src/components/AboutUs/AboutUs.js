import React from 'react';
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__container container">
        <div className="about-us__content">
          <div className="about-us__title-container">
            <p className='about-us__title-container--label'>SOBRE NOSOTROS</p>
            <p className='about-us__title-container--title'>Somos Expertos En Energía Eléctrica</p>
            <div className='about-us__title-container--buttons-container'>
              <button className='about-us__title-container--buttons-container--button'>Conoce más</button>
              <button className='about-us__title-container--buttons-container--button'>Contáctanos</button>
            </div>
          </div>
          <div className="about-us__description-container">
            <p className='about-us__description-container--description'>
              En VQ Global Ingeniería ofrecemos soluciones eléctricas de alta precisión para centrales de 
              generación y sistemas críticos. Combinamos diagnóstico avanzado, automatización y recuperación 
              de activos para maximizar la eficiencia operativa. Nuestro compromiso es brindar resultados 
              confiables, sostenibles y adaptados a cada necesidad técnica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}