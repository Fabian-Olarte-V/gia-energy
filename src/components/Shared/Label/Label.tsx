import React from 'react';
import './Label.scss';

export default function Label({ label, textColor = '#000' }) {
    return (
        <div className="label-container">
            <h3 className="label-container__label" style={{color: textColor}}>
                {label}
            </h3>
        </div>
    );
}