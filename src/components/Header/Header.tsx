'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.scss';
import Image from 'next/image';

export default function Header({ alwaysVisible = true }: { alwaysVisible?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) { 
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div
        className={`header__wrapper ${
          alwaysVisible || isScrolled ? 'header__wrapper--scrolled' : ''
        }`}
      >
        <div className="header__container">
          <div className="header__logo--container">
            <div className="header__logo"> 
              <Image src={"assets/images/icon/vqGlobalIcon.png"} alt="VQGLOBAL" fill objectFit='contain' />
            </div>
          </div>
          <div className="header__toggle" onClick={toggleMenu}>☰</div>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href={`/`}>Inicio</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href={`/servicios`}>Servicios</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href={`/resultados`}>Resultados</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href={`/sobre-nosotros`}>Sobre Nosotros</Link>
              </li>
              {isMenuOpen && (
                <li className="header__nav-item">
                  <Link className="header__nav-item--link" href={`/contacto`}>Contacto</Link>
                </li>
              )
              }
            </ul>
          </nav>
          <div className="header__contact">
            <Link className="header__contact-button button-template" href={`/contacto`}>Contactanos</Link>
          </div>
        </div>
      </div>
    </header>
  );
}