
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsappIcon from '@/components/Shared/IconsSvg/Whatsapp/WhatsappIcon';
import InstagramIcon from '@/components/Shared/IconsSvg/Instagram/Instagram';
import FacebookIcon from '@/components/Shared/IconsSvg/Facebook/Facebook';
import { socialLinks } from '@/lib/footerData/footerData';
import './Footer.scss';



function SocialIcon({ iconType, color }: { iconType: string; color: string }) {
  if (iconType === 'whatsapp') return <WhatsappIcon color={color} />;
  if (iconType === 'instagram') return <InstagramIcon color={color} />;
  if (iconType === 'facebook') return <FacebookIcon color={color} />;
  return null;
}


function ContactInfo() {
  return (
    <div className="footer__contact-info">
      <h3 className="footer__label">Contacto</h3>
      <p className="footer__text">
        <a href="mailto:ingenieria@giaenergy.com" className="footer__link">ingenieria@giaenergy.com</a>
      </p>
      <div className="footer__social-icons">
        {socialLinks.map(({ href, iconType, color }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon iconType={iconType} color={color || '#A1A1A1'} />
          </Link>
        ))}
      </div>
    </div>
  );
}


const navLinks = [
  { href: '/servicios', text: 'Servicios' },
  { href: '/resultados', text: 'Resultados' },
  { href: '/sobre-nosotros', text: 'Sobre Nosotros' },
  { href: '/contacto', text: 'Contacto' },
];


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo-container">
          <div className="footer__logo">
            <Image
              className="footer__logo-image"
              src="/icon/giaIconBlack.png"
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
                <Link className="footer__link" href={href}>{text}</Link>
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
            <p className="footer__text">+57 315 589 0187</p>
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

