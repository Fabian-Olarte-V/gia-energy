'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';


export default function Header({ alwaysVisible = true }: { alwaysVisible?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 100; 
    const SCROLL_DIFF_THRESHOLD = 5; 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY < SCROLL_THRESHOLD) {
        setIsVisible(true);
        setIsScrolled(true);
      } else if (diff > SCROLL_DIFF_THRESHOLD) {
        setIsVisible(false);
        setIsScrolled(true);
      } else if (diff < -SCROLL_DIFF_THRESHOLD) {
        setIsVisible(true);
        setIsScrolled(true);
      }

      lastScrollY.current = currentScrollY;
    };

    setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          (alwaysVisible && isScrolled) || (!alwaysVisible && isScrolled) ? 'header__wrapper--scrolled' : ''
        }`}
      >
        <div className="header__container">
          <div className="header__logo--container">
            <div className="header__logo"> 
              <Image className='header__logo--image' src={"assets/images/icon/vqGlobalIcon.png"} alt="VQGLOBAL" fill objectFit='contain' />
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
              <li className="header__nav-item header__contact">
                <Link className="header__contact-button button-template" href={`/contacto`}>Contáctanos</Link>
              </li>
              {isMenuOpen && (
                <li className="header__nav-item">
                  <Link className="header__nav-item--link" href={`/contacto`}>Contacto</Link>
                </li>
              )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}