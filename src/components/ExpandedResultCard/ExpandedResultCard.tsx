import React from 'react';
import Image from 'next/image';
import { IExpandedResultCardProps } from '@/interfaces/resultCard/resultCard.interface';
import './ExpandedResultCard.scss';

export default function ExpandedResultCard({data}: {data: IExpandedResultCardProps}) {
  const { title, description, backgroundImage, stats } = data;
  
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
        {stats.map((stat, index) => (
          <div key={index} className="expanded-result-card__content--item">
            <div className="expanded-result-card__content--item--stat-container">
              <h2 className="expanded-result-card__content--item--stat">{stat.value}</h2>
            </div>
            <p className="expanded-result-card__content--item--description">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}