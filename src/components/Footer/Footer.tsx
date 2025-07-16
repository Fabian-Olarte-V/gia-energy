import React from 'react';
import Link from 'next/link';
import WhatsappIcon from '../Shared/IconsSvg/Whatsapp/WhatsappIcon';
import LinkedinIcon from '../Shared/IconsSvg/Linkedin/LinkedinIcon';
import './Footer.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo--container">
          <div className="footer__logo"> 
            <Image src={"assets/images/icon/vqGlobalIcon.png"} alt="VQGLOBAL" fill objectFit='contain' />
          </div>
        </div>
        <div className="footer__contact-info">
          <h3 className="footer__label">Contacto</h3>
          <p className="footer__text">
            <a href="mailto:jvelazqu1@gmail.com" className="footer__link">jvelazqu1@gmail.com</a>
          </p>
          <p className="footer__text">
            <a href="mailto:Oscarquintero2006@hotmail.com" className="footer__link">Oscarquintero2006@hotmail.com</a>
          </p>
          <div className="footer__social-icons">
            <Link href="https://wa.me/573102860714" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon color="#A1A1A1" />
            </Link>
            <Link href="https://www.linkedin.com/company/vq-global-ingenieria" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon color="#A1A1A1" />
            </Link>
          </div>
        </div>
        <nav className="footer__nav">
          <h3 className="footer__label">Navegación</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item">
              <Link className="header__nav-item--link footer__text footer__link" href={`/servicios`}>Servicios</Link>
            </li>
            <li className="footer__nav-list-item">
              <Link className="header__nav-item--link footer__text footer__link" href={`/resultados`}>Resultados</Link>
            </li>
            <li className="footer__nav-list-item">
              <Link className="header__nav-item--link footer__text footer__link" href={`/sobre-nosotros`}>Sobre Nosotros</Link>
            </li>
            <li className="footer__nav-list-item">
              <Link className="header__nav-item--link footer__text footer__link" href={`/contacto`}>Contacto</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__company-info">
          <div className="footer__info-item">
            <h3 className="footer__label">Horarios de atención</h3>
            <p className="footer__text">Lunes a Viernes de 8AM - 5PM</p>
          </div>
          <div className="footer__info-item footer__info-item">
            <h3 className="footer__label">VQ Global Ingeniería</h3>
            <p className="footer__text">Villavicencio - Colombia</p>
            <p className="footer__text">NIT 1231325734</p>
          </div>
        </div>
        <div className="footer__copy">
          <p className="footer__text">&copy; Derechos reservados © 2025 VQ Global Ingeniería</p>
        </div>
      </div>
    </footer>
  );
}

