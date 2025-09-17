import React, { useEffect, useRef, useState } from 'react';
import { Service } from '@/interfaces/service/serviceCard.interface';
import './ServiceCard.scss';

export default function ServiceCard({ data: { title, description, backgroundImage, benefits, commonApplications, whatWeDo } }: { data: Service }) {
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia?.('(hover: none)').matches || 'ontouchstart' in window);
  }, []);

  useEffect(() => {
    if (!isTouch || !active) return;

    const handleOutsideClick = (e: Event) => {
      const target = e.target as Node;
      if (cardRef.current && !cardRef.current.contains(target)) {
        setActive(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && setActive(false);

    document.addEventListener('pointerdown', handleOutsideClick, true);
    document.addEventListener('keydown', handleEscape, true);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick, true);
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [isTouch, active]);

  return (
    <div
      ref={cardRef}
      className={`service-card-expanded${active ? ' active' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => isTouch && setActive(prev => !prev)}
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
        <div className="service-card-expanded__info-item service-card-expanded__info-item--benefits">
          <h2 className="service-card-expanded__info-item--subtitle">Beneficios:</h2>
          <ul className="service-card-expanded__info-item--list">
            {benefits.map((benefit, index) => (
              <li key={`benefit-${index}`}>{benefit.trim()}</li>
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
