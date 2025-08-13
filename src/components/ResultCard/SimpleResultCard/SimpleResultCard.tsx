import React from 'react';
import { ISimpleResultCardProps } from '@/interfaces/result/resultCard.interface';
import './SimpleResultCard.scss';
import Link from 'next/link';
import RedirectIcon from '../../Shared/IconsSvg/Redirect/RedirectIcon';
import Image from 'next/image';

export default function SimpleResultCard({ data }: {data: ISimpleResultCardProps}) {
  const { title, description, backgroundImage } = data;
  
  return (
    <Link href="/resultados" className="result-card">
      <div className="result-card__image-container">
        <Image className='result-card__image' src={backgroundImage} alt={title} fill />
      </div>
      <div className='result-card__content'>
        <h1 className="result-card__title">{title}</h1>
        <div>
          <p className="result-card__description">{description}</p>
        </div>
      </div>
      <span className="result-card__link">
        Ver más Resultados
        <RedirectIcon size={20} />
      </span>
    </Link>
  );
}