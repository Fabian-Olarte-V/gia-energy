"use client";
import { useState, useEffect } from "react";
import { HeaderProps } from "@/interfaces/header/header";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Header.scss";


export default function Header({ blackItems = false, dynamicBackground = false }: HeaderProps & { dynamicBackground?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forceDark, setForceDark] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    if (!dynamicBackground) return;
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dynamicBackground]);

  useEffect(() => {
    if (!dynamicBackground) return;
    setForceDark(isMenuOpen);
  }, [isMenuOpen, dynamicBackground]);


  const wrapperClass = dynamicBackground
    ? `header__wrapper${(scrolled || forceDark ? " header__wrapper--scrolled" : "")}${blackItems ? " header__wrapper--black-items" : ""}`
    : `header__wrapper header__wrapper--scrolled${blackItems ? " header__wrapper--black-items" : ""}`;


  return (
    <header className="header header--visible">
      <div className={wrapperClass}>
        <div className="header__container">
          <div className="header__logo-container">
            <div className="header__logo">
              <Link href="/">
                <Image
                  className="header__logo-image"
                  src="/icon/fullIconWhite.png"
                  alt="VQGLOBAL"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>
          <div className="header__toggle" onClick={() => setIsMenuOpen((open) => !open)}>☰</div>
          <nav className={`header__nav${isMenuOpen ? " header__nav--open" : ""}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link className={`header__nav-item-link${pathname === "/" ? " header__nav-item-link-active" : ""}`} href="/">Inicio</Link>
              </li>
              <li className="header__nav-item">
                <Link className={`header__nav-item-link${pathname === "/servicios" ? " header__nav-item-link-active" : ""}`} href="/servicios">Servicios</Link>
              </li>
              <li className="header__nav-item">
                <Link className={`header__nav-item-link${pathname === "/resultados" ? " header__nav-item-link-active" : ""}`} href="/resultados">Resultados</Link>
              </li>
              {isMenuOpen && (
                <li className="header__nav-item">
                  <Link className={`header__nav-item-link${pathname === "/contacto" ? " header__nav-item-link-active" : ""}`} href="/contacto">Contacto</Link>
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