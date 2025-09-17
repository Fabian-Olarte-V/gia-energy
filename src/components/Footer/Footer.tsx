import React from 'react';
import Link from 'next/link';
import WhatsappIcon from '../Shared/IconsSvg/Whatsapp/WhatsappIcon';
import LinkedinIcon from '../Shared/IconsSvg/Linkedin/LinkedinIcon';
import Image from 'next/image';
import { socialLinks } from '@/lib/footerData/footerData';
import './Footer.scss';

const SocialIcon: React.FC<{ iconType: string; color: string }> = ({ iconType, color }) => {
  switch (iconType) {
    case 'whatsapp':
      return <WhatsappIcon color={color} />;
    case 'linkedin':
      return <LinkedinIcon color={color} />;
    default:
      return null;
  }
};

const ContactInfo = () => {
  return (
    <div className="footer__contact-info">
      <h3 className="footer__label">Contacto</h3>
      {["jvelazqu1@gmail.com", "Oscarquintero2006@hotmail.com"].map((email) => (
        <p key={email} className="footer__text">
          <a href={`mailto:${email}`} className="footer__link">{email}</a>
        </p>
      ))}
      <div className="footer__social-icons">
        {socialLinks.map(({ href, iconType, color }) => (
          <Link 
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon iconType={iconType} color={color || "#A1A1A1"} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const navLinks = [
  { href: "/servicios", text: "Servicios" },
  { href: "/resultados", text: "Resultados" },
  { href: "/sobre-nosotros", text: "Sobre Nosotros" },
  { href: "/contacto", text: "Contacto" }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo-container">
          <div className="footer__logo">
            <Image
              className="footer__logo-image"
              src="/assets/images/icon/giaIconBlack.png"
              alt="VQ Global Ingeniería"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="footer__contact-mobile">
            <ContactInfo />
          </div>
        </div>

        <div className="footer__contact-desktop">
          <ContactInfo />
        </div>

        <nav className="footer__nav">
          <h3 className="footer__label">Navegación</h3>
          <ul className="footer__nav-list">
            {navLinks.map(({ href, text }) => (
              <li key={href} className="footer__nav-list-item">
                <Link className="footer__link" href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__company-info">
          <div className="footer__info-item">
            <h3 className="footer__label">Horarios de atención</h3>
            <p className="footer__text">24 Horas</p>
          </div>
          <div className="footer__info-item">
            <h3 className="footer__label">GIA</h3>
            <p className="footer__text">Villavicencio - Colombia</p>
            <p className="footer__text">NIT 1231325734</p>
          </div>
        </div>
      </div>
      <div className="footer__copy container">
        <p className="footer__text">
          {`© Derechos reservados ${new Date().getFullYear()} GIA`}
        </p>
      </div>
    </footer>
  );
}

