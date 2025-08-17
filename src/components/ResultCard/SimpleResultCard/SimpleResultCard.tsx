import React from 'react';
import { ISimpleResultCardProps } from '@/interfaces/result/resultCard.interface';
import Link from 'next/link';
import Image from 'next/image';
import './SimpleResultCard.scss';

export default function SimpleResultCard({ data }: {data: ISimpleResultCardProps}) {
  const { title, backgroundImage, category } = data;
  
  return (
    <Link href="/resultados" className="result-card">
      <div className="result-card__image-container">
        <Image className='result-card__image' src={backgroundImage} alt={title} fill />
      </div>
      <div className='result-card__content'>
        <p className="result-card__category">{category}</p>
        <h1 className="result-card__title">{title}</h1>
      </div>
    </Link>
  );
}