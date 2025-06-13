import React from 'react';
import './Label.scss';

export default function Label({ label }) {
    return (
        <div className="label-container">
            <h3 className="label-container__label">{label}</h3>
        </div>
    );
}