import React from 'react';
import './Label.scss';

export default function Label({ label, color = '#F9AE74', textColor = '#000' }) {
    return (
        <div className="label-container">
            <h3 className="label-container__label" style={{backgroundColor: color, color: textColor}}>
                {label}
            </h3>
        </div>
    );
}