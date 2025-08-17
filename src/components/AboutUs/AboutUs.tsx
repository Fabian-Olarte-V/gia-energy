import React from 'react';
import Label from '../Shared/Label/Label';
import './AboutUs.scss';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__container container">
        <div className="about-us__content">
          <div className="about-us__title-container">
            <Label label={"Sobre Nosotros"} textColor='#004C99'/>
            <p className='about-us__title-container--title title-template'>Somos Expertos En <span className='about-us__title-container--highlight'>Energía Eléctrica</span></p>
            <p className='about-us__title-container--subtitle description-template'>Combinamos experiencia técnica con innovación para ofrecer soluciones que transforman la forma en que nuestros clientes gestionan sus activos eléctricos.</p>
            <div className='about-us__title-container--buttons-container'>
              <Link href={'sobre-nosotros'} className='about-us__title-container--buttons-container--button more-info-button button-template'>Conoce más</Link>
              <Link href={'/contacto'} className='about-us__title-container--buttons-container--button contact-button button-template'>Contáctanos</Link>
            </div>
          </div>
          <div className="about-us__description-container">
            <p className='about-us__description-container--description description-template'>
              En VQ Global Ingeniería combinamos más de 40 años de experiencia con tecnología de 
              punta para ofrecer soluciones eléctricas especializadas en generación de energía.
              <br /> <br /> 
              Diagnosticamos, recuperamos y optimizamos activos críticos con precisión, reduciendo 
              fallas, maximizando la eficiencia y extendiendo la vida útil de tus equipos. Nuestra 
              ingeniería transforma problemas complejos en resultados sostenibles.
            </p>
            <div className='about-us__title-container--buttons-container about-us__title-container--buttons-container--mobile'>
              <Link href={'sobre-nosotros'} className='about-us__title-container--buttons-container--button more-info-button button-template' >Conoce más</Link>
              <Link href={'/contacto'} className='about-us__title-container--buttons-container--button contact-button button-template'>Contáctanos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}