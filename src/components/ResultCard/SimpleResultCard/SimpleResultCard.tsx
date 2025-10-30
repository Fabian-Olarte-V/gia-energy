import React from 'react';
import { Result } from '@/interfaces/result/resultCard.interface';
import Link from 'next/link';
import Image from 'next/image';
import './SimpleResultCard.scss';

export default function SimpleResultCard({ data }: {data: Result}) {
  const { title, backgroundImage, category } = data;
  
  return (
    <Link href="/resultados" className="result-card">
      <div className="result-card__image-container">
        <Image className='result-card__image' src={backgroundImage} alt={title} fill />
      </div>
      <div className='result-card__content'>
        <p className="result-card__title">{data.outcomeHighlights[1]}</p>
        <h1 className="result-card__title">{data.outcomeHighlights[0]}</h1>
      </div>
    </Link>
  );
}