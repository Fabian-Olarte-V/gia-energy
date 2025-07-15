import React from 'react';
import { ISimpleResultCardProps } from '@/interfaces/resultCard/resultCard.interface';
import './ResultCard.scss';


export default function ResultCard({ data }: {data: ISimpleResultCardProps}) {
  const { title, description, backgroundImage } = data;
  
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