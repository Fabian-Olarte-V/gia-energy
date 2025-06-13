import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <h2>VQ Global</h2>
        </div>
        <div className="footer__contact-info">
          <h3 className="footer__label">Contacto</h3>
          <p className="footer__text">Email: vqingsas@hotmail.com</p>
        </div>
        <nav className="footer__nav">
          <h3 className="footer__label">Navegación</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item">
              <a className="footer__link" href="#privacy">Servicios</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="footer__link" href="#terms">Sobre Nosotros</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="footer__link" href="#contact">Proyectos</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="footer__link" href="#contact">Contactanos</a>
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

