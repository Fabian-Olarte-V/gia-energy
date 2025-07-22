import React from 'react';
import './StatsBadge.scss';
import { statsData } from '@/lib/initialData/initialData';
import Label from '../Shared/Label/Label';
import ClockIcon from '../Shared/IconsSvg/statsIcons/ClockIcon';
import ExtensionUpIcon from '../Shared/IconsSvg/statsIcons/ExtensionUp';
import CostsIcon from '../Shared/IconsSvg/statsIcons/CostsIcon';
import SuccessIcon from '../Shared/IconsSvg/statsIcons/SuccessIcon';


function getIconForStat(index: number) {
  if (index == 0) return <ClockIcon size={34} />;
  if (index == 1) return <ExtensionUpIcon size={34} />;
  if (index == 2) return <CostsIcon size={34} />;
  if (index == 3) return <SuccessIcon size={34} />;
}

export default function StatsBadge() {
  const stats = statsData;

  return (
    <section className="stats-badge">
      <div className="stats-badge__title-container">
        <Label label="Resultados Comprobados" color='#d4ebffff' textColor='#004C99'/>
        <h2 className="stats-badge__title title-template">
          Nuestros <span className='stats-badge__highlight'>Números</span> Hablan
        </h2>
      </div>
      <div className="stats-badge__container container">
        <div className="stats-badge__content">
          {stats.map((stat, index) => (
            <div key={index} className="stats-badge__item">
              <div className="stats-badge__item--icon">
                {getIconForStat(index)}
              </div>
              <p className="stats-badge__item--label">{stat.label}</p>
              <p className="stats-badge__item--value">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}