'use client';
import React, { useState, useEffect } from 'react';
import './Header.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const savedVisibility = localStorage.getItem('headerVisibility');
    if (savedVisibility !== null) {
      setIsVisible(savedVisibility === 'true');
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
        localStorage.setItem('headerVisibility', 'false'); 
      } else {
        setIsVisible(true); 
        localStorage.setItem('headerVisibility', 'true'); 
      }

      setIsScrolled(currentScrollY > 0); 
      lastScrollY = currentScrollY;
    };

    setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div className={`header__wrapper ${isScrolled ? 'header__wrapper--scrolled' : ''}`}>
        <div className='header__container container'>
          <div className="header__logo">
            <h1>VQGLOBAL</h1>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-item--link" href="#home">
                  Home
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-item--link" href="#about">
                  About
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-item--link" href="#services">
                  Services
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-item--link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__contact">
            <button className="header__contact-button">Contactanos</button>
          </div>
        </div>
      </div>
    </header>
  );
}