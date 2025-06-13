import React from 'react';
import './ServiceCard.scss';

export default function ServiceCard({ title, description, backgroundImage }) {
  return (
    <div
      className="service-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="service-card__title">{title}</h1>
      <p className="service-card__description">{description}</p>
      <button className="service-card__button">Más Información</button>
    </div>
  );
}