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
            <Label label={"SOBRE NOSOTROS"} color='#fff'/>
            <p className='about-us__title-container--title title-template'>Somos Expertos En Energía Eléctrica</p>
            <div className='about-us__title-container--buttons-container'>
              <Link href={'sobre-nosotros'} className='about-us__title-container--buttons-container--button more-info-button button-template'>Conoce más</Link>
              <Link href={'/contacto'} className='about-us__title-container--buttons-container--button contact-button button-template'>Contáctanos</Link>
            </div>
          </div>
          <div className="about-us__description-container">
            <p className='about-us__description-container--description description-template'>
              En VQ Global Ingeniería ofrecemos soluciones eléctricas especializadas para centrales 
              de generación y sistemas críticos. Nuestro equipo cuenta con más de 40 años de 
              experiencia en diagnóstico, recuperación y optimización de activos, asegurando 
              resultados confiables y eficientes adaptados a cada necesidad.
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