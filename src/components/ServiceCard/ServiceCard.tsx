import React from 'react';
import { IService } from '@/interfaces/serviceCard/serviceCard.interface';
import Link from 'next/link';
import './ServiceCard.scss';

type ServiceCardComponentProps = {
  data: IService;
  expanded?: boolean;
};

export default function ServiceCard({ data, expanded = true }: ServiceCardComponentProps) {
  const { title, description } = data;

  if (expanded) {
    return (
      <div
        className="service-card-expanded"
        style={{ backgroundImage: `url(${"../../../public/assets/images/service-1.png"})` }}
      >
        <div className="service-card-expanded__main-content">
          <div className="service-card-expanded__main-content--title-container">
            <h1 className="service-card-expanded__main-content--title-container--title">{title}</h1>
            <p className="service-card-expanded__main-content--title-container--description">{description}</p>
          </div>
          <Link href="/contacto" className="service-card-expanded__main-content--button">Solicita tu cotización</Link>
        </div>
        <div className="service-card-expanded__info">
          <div className="service-card-expanded__info-item service-card-expanded__info-item--benefits">
            <h2 className="service-card-expanded__info-item--subtitle">Beneficios:</h2>
            <ul className="service-card-expanded__info-item--list">
              <li>Reducción de tiempos de parada</li>
              <li>Eliminación de focos de falla</li>
              <li>Mejora en la eficiencia operativa</li>
            </ul>
          </div>
          <div className="service-card-expanded__info-item">
            <h2 className="service-card-expanded__info-item--subtitle">¿Qué hacemos?</h2>
            <p className="service-card-expanded__info-item--description">
              Digitalizamos procesos críticos mediante automatización y análisis predictivo con redes neuronales.
            </p>
          </div>
          <div className="service-card-expanded__info-item">
            <h2 className="service-card-expanded__info-item--subtitle">Aplicaciones comunes</h2>
            <p className="service-card-expanded__info-item--description">
              Centrales de generación, subestaciones automatizadas y sistemas con alta carga operativa.
            </p>
          </div>
        </div>
        <Link
            href="/contacto"
            className="service-card-expanded__main-content--button service-card-expanded__main-content--button--mobile"
          >
            Solicita tu cotización
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`service-card ${ 'service-card--black' }`}
      style={{ backgroundImage: `url(${""})` }}
    >
      <div className="service-card__overlay"></div>
      <h1 className="service-card__title">{title}</h1>
      <p className="service-card__description">{description}</p>
      <Link href={'/servicios'} className="service-card__button button-template">Más Información</Link>
    </div>
  );
}