import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import "./page.scss";


export default function ContactPage() {
    return (
        <main className="">
            <Header blackItems={true} />
            <div className="contact-page__hero">
                <div className="contact-page__hero-overlay" />
                <div className="contact-page__hero-content">
                    <div className="contact-page__container container">
                        <div className="contact-page__form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
