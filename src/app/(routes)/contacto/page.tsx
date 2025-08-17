import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./page.scss";
import ContactForm from "@/components/ContactForm/ContactForm";
import Label from "@/components/Shared/Label/Label";


export default function ContactPage() {
    return (
        <main className="contact-page page-container">
            <Header blackItems={true} />
                <div className="contact-page__hero container">
                    <div className="contact-page__hero-title-container">
                        <Label
                            label="Contacto" 
                            textColor="#0F3529" 
                        />
                        <h1 className="contact-page__hero-title-container--title">
                            Your Essential Source for Global Solutions
                        </h1>
                    </div>
                </div>
            <div className="contact-page__container container">
                <ContactForm />
            </div>
            <Footer />
        </main>
    );
}
