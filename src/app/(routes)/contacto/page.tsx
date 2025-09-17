import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import "./page.scss";
import Image from "next/image";

const HeroSection = () => (
    <section className="contact-page__hero">
        <div className="contact-page__hero-content">
            <div className="contact-page__logo">
                <Image
                    className="header__logo--image"
                    src="/assets/images/icon/giaIcon.png"
                    alt="VQGLOBAL"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>      
            <p className="contact-page__subtitle">
                &ldquo;Adquiere nuestros servicios de paneles solares y comienza a ahorrar energía de manera inteligente mientras cuidas el planeta.&rdquo;
            </p>
        </div>
    </section>
);

export default function ContactPage() {
    return (
        <main className="contact-page page-container">
            <Header blackItems={true} />
            <div className="contact-page__container container">
                <HeroSection />
                <div className="contact-page__form">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </main>
    );
}
