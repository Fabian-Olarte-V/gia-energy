import React from 'react';
import './ResultCard.scss';

export default function ResultCard({ title, description, backgroundImage }) {
  return (
    <div
      className="result-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="result-card__title">{title}</h1>
      <p className="result-card__description">{description}</p>
    </div>
  );
}