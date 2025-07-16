import React from 'react';
import Image from 'next/image';
import { Result } from '@/interfaces/result/resultCard.interface';
import './ResultCard.scss';

export default function ResultCard({data}: {data: Result}) {
  const { title, description, backgroundImage, outcomeHighlights } = data;
  
  return (
    <div className="expanded-result-card">
      <div className="expanded-result-card__image-container">
        <Image src={backgroundImage} alt="Imagen de fondo del proyecto" fill />
      </div>
      <div className="expanded-result-card__title-container">
        <h1 className="expanded-result-card__title-container--title">{title}</h1>
        <p className="expanded-result-card__title-container--description">{description}</p>
      </div>
      <div className="expanded-result-card__separator" />
      <div className="expanded-result-card__content">
        {outcomeHighlights.map((outcome, index) => (
          <div key={index} className="expanded-result-card__content--item">
            <div className="expanded-result-card__content--item--stat-container"></div>
            <p className="expanded-result-card__content--item--description">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}