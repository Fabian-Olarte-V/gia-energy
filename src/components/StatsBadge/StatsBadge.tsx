import React from 'react';
import { statsData } from '@/lib/initialData/initialData';
import './StatsBadge.scss';

export default function StatsBadge() {
  const stats = statsData;

  return (
    <section className="stats-badge">
      <div className="stats-badge__container">
        <div className="stats-badge__content">
          {stats.map((stat, index) => (
            <div key={index} className="stats-badge__item">
              <p className="stats-badge__item--label">                
                {stat.label.slice(0, -1)}
                <span className="stats-badge__item--label-highlight">
                  {stat.label.slice(-1)}
                </span>
              </p>
              <p className="stats-badge__item--value">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}