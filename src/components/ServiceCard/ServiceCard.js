import React from 'react';
import './ServiceCard.scss';

export default function ServiceCard({ title, description, backgroundImage, black }) {
  return (
    <div
      className={`service-card ${black ? 'service-card--black' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div></div>
      <h1 className="service-card__title">{title}</h1>
      <p className="service-card__description">{description}</p>
      <button className="service-card__button">Más Información</button>
    </div>
  );
}