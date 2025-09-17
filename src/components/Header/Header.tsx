'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '@/interfaces/header/header';
import './Header.scss';


export default function Header({ blackItems = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header header--visible"> 
      <div className={`header__wrapper header__wrapper--scrolled ${blackItems ? 'header__wrapper--black-items' : ''}`}>
        <div className="header__container">
          <div className="header__logo--container">
            <div className="header__logo">
              <Link href="/">
                <Image
                  className="header__logo--image"
                  src="/assets/images/icon/fullIconWhite.png"
                  alt="VQGLOBAL"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
          </div>
          <div className="header__toggle" onClick={toggleMenu}>☰</div>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href="/">Inicio</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href="/servicios">Servicios</Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-item--link" href="/resultados">Resultados</Link>
              </li>
              {isMenuOpen && (
                <li className="header__nav-item">
                  <Link className="header__nav-item--link" href="/contacto">Contacto</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="header__contact">
            <Link className="header__contact-button button-template" href="/contacto">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}