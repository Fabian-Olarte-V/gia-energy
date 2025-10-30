"use client";
import React from 'react';
import { statsData } from '@/lib/initialData/initialData';
import { IStatItem } from '@/interfaces/statsBadge/statsBadge';
import './StatsBadge.scss';


function StatBadgeItem({ label, value }: IStatItem) {
  const mainText = label.slice(0, -1);
  const highlightText = label.slice(-1);

  return (
    <div className="stats-badge__item">
      <p className="stats-badge__item--label">
        {mainText}
        <span className="stats-badge__item--label-highlight">
          {highlightText}
        </span>
      </p>
      <p className="stats-badge__item--value">{value}</p>
    </div>
  );
}


export default function StatsBadge() {
  return (
    <section className="stats-badge">
      <div className="stats-badge__content">
        {statsData.map((stat, index) => (
          <StatBadgeItem
            key={`stat-${index}`}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  );
}