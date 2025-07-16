import React from 'react';
import { ISimpleResultCardProps } from '@/interfaces/result/resultCard.interface';
import './SimpleResultCard.scss';
import Link from 'next/link';
import RedirectIcon from '../../Shared/IconsSvg/Redirect/RedirectIcon';


export default function SimpleResultCard({ data }: {data: ISimpleResultCardProps}) {
  const { title, description, backgroundImage } = data;
  
  return (
    <div
      className="result-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="result-card__title">{title}</h1>
      <div>
        <p className="result-card__description">{description}</p>
        <Link className="result-card__link" href="/resultados">
          Ver más
          <RedirectIcon size={20} />
        </Link>
      </div>
    </div>
  );
}