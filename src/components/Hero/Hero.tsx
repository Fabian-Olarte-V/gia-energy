"use client";
import React from 'react';
import './Hero.scss';
import ArrowIcon from '../Shared/IconsSvg/ArrowIcon/ArrowIcon';

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.querySelector('.aboutus-section');
    if (nextSection) {
      const offset = -30; 
      const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container container">
        <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor 
          nisi, eu mollis justo. Lorem ipsum dolor sit amet, consectetur
        </p>
        <h1 className="hero__title">ENERGIAS RENOVABLES</h1>
      </div>
      <div className='hero__scroll-indicator' onClick={handleScroll}>
        <ArrowIcon color='#fff' rotation={-90}/>
      </div>
    </section>
  );
}