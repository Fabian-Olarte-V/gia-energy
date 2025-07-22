import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/interfaces/service/serviceCard.interface';
import './ServiceCard.scss';

type ServiceCardComponentProps = {
  data: Service;
  expanded?: boolean;
};

export default function ServiceCard({ data, expanded = true }: ServiceCardComponentProps) {
  const { title, description, backgroundImage, benefits, commonApplications, whatWeDo } = data;

  if (expanded) {
    return (
      <div className="service-card-expanded">
        <div className="service-card-expanded__main-content">
          <div className="service-card-expanded__main-content--title-container">
            <Image 
              className='service-card-expanded__main-content--title-container--image' 
              src={backgroundImage} 
              alt={title} 
              fill 
              objectFit='cover' 
            />
            <h1 className="service-card-expanded__main-content--title-container--title">
              {title}
            </h1>
          </div>
        </div>

        <div className="service-card-expanded__info">
          <p className="service-card-expanded__main-content--title-container--description">
            {description}
          </p>
          <div className="service-card-expanded__info-item service-card-expanded__info-item--benefits">
            <h2 className="service-card-expanded__info-item--subtitle">Beneficios:</h2>
            <ul className="service-card-expanded__info-item--list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="service-card-expanded__info-item">
            <h2 className="service-card-expanded__info-item--subtitle">¿Qué hacemos?</h2>
            <p className="service-card-expanded__info-item--description">{whatWeDo}</p>
          </div>
          <div className="service-card-expanded__info-item">
            <h2 className="service-card-expanded__info-item--subtitle">Aplicaciones comunes</h2>
            <p className="service-card-expanded__info-item--description">{commonApplications}</p>
          </div>
        </div>
        <Link href="/contacto" className="service-card-expanded__main-content--button">
          Solicita tu cotización
        </Link>
      </div>
    );
  }

  return (
    <div
      className="service-card service-card--black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="service-card__overlay" />
      <h1 className="service-card__title">{title}</h1>
      <p className="service-card__description">{description}</p>
      <Link href="/servicios" className="service-card__button button-template">
        Más Información
      </Link>
    </div>
  );
}