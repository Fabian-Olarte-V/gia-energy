import React, { useEffect, useRef, useState } from 'react';
import { Service } from '@/interfaces/service/serviceCard.interface';
import './ServiceCard.scss';

type ServiceCardComponentProps = { data: Service };

export default function ServiceCard({ data }: ServiceCardComponentProps) {
  const { title, description, backgroundImage, benefits, commonApplications, whatWeDo } = data;

  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia?.('(hover: none)').matches || 'ontouchstart' in window);
  }, []);

  const handleCardClick = () => {
    if (isTouch) setActive(prev => !prev);
  };

  useEffect(() => {
    if (!isTouch || !active) return;

    const onPointerDown = (e: Event) => {
      const target = e.target as Node;
      if (cardRef.current && !cardRef.current.contains(target)) {
        setActive(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(false);
    };

    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
    };
  }, [isTouch, active]);

  return (
    <div
      ref={cardRef}
      className={`service-card-expanded${active ? ' active' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={handleCardClick}
      role="button"
      aria-pressed={active}
      tabIndex={0}
      onKeyDown={(e) => {
        if (isTouch && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          setActive(prev => !prev);
        }
      }}
    >
      <h1 className="service-card-expanded__title">{title}</h1>

      <div className="service-card-expanded__info--first">
        <p className="service-card-expanded__info--first--description">{description}</p>
      </div>

      <div className="service-card-expanded__info">
        <p className="service-card-expanded__description">{description}</p>

        <div className="service-card-expanded__info-item service-card-expanded__info-item--benefits">
          <h2 className="service-card-expanded__info-item--subtitle">Beneficios:</h2>
          <ul className="service-card-expanded__info-item--list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="service-card-expanded__info-item">
          <h2 className="service-card-expanded__info-item--subtitle">¿Qué hacemos?</h2>
          <p className="service-card-expanded__info-item--description">{whatWeDo}</p>
        </div>

        <div className="service-card-expanded__info-item">
          <h2 className="service-card-expanded__info-item--subtitle">Aplicaciones comunes</h2>
          <p className="service-card-expanded__info-item--description">{commonApplications}</p>
        </div>
      </div>
    </div>
  );
}
