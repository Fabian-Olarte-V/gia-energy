import React from 'react';
import './StatsBadge.scss';

export default function StatsBadge() {
  return (
    <section className="stats-badge">
      <div className="stats-badge__container container">
        <div className="stats-badge__content">
          
          <div className="stats-badge__item">
            <p className='stats-badge__item--label'>+150%</p>
            <p className='stats-badge__item--value'>Extensión de vida útil en generadores recuperados</p>
          </div>
          <div className="stats-badge__item">
            <p className='stats-badge__item--label'>+15</p>
            <p className='stats-badge__item--value'>Años de experiencia en sistemas eléctricos críticos</p>
          </div>
          <div className="stats-badge__item">
            <p className='stats-badge__item--label'>40%</p>
            <p className='stats-badge__item--value'>Reducción de costos operativos gracias a repotenciación</p>
          </div>
          <div className="stats-badge__item">
            <p className='stats-badge__item--label'>70%</p>
            <p className='stats-badge__item--value'>Disminución de fallas tras procesos de automatización</p>
          </div>

        </div>
      </div>
    </section>
  );
}