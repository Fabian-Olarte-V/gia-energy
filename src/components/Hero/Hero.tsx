"use client";
import Link from "next/link";
import ArrowIcon from "../Shared/IconsSvg/ArrowIcon/ArrowIcon";
import "./Hero.scss";

const SCROLL_OFFSET = -30;

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.querySelector(".aboutus-section");
    if (nextSection) {
      const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Tu energía, tu inversión</h1>
        <p className="hero__description">Transformamos la manera en que usas tu energía</p>
        <Link href="/contacto" className="hero__cta-button button-template">
          Solicita tu cotización
        </Link>
      </div>
      <button className="hero__scroll-indicator" onClick={handleScroll} aria-label="Scroll to next section">
        <ArrowIcon color="#fff" rotation={-90} />
      </button>
    </section>
  );
}