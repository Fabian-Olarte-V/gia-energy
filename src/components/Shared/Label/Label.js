import React from 'react';
import './Label.scss';

export default function Label({ label, color = '#F9AE74' }) {
    return (
        <div className="label-container">
            <h3 className="label-container__label" style={{color: color}}>
                {label}
            </h3>
        </div>
    );
}