import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import GradientCircleResponsive from "@/components/Shared/GradientCircleResponsive";
import { gradientCirclesContact } from "@/lib/layoutData/gradientData";
import "./page.scss";

type InputGroupProps = {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    rows?: number;
};

const InputGroup = ({ label, id, type = "text", required = true, isTextArea = false, rows = 4 }: InputGroupProps) => (
    <div className="contact-page__form--input-group">
        <label 
            className="contact-page__form--input-group--label"
            htmlFor={id}
        >
            {label}
        </label>
        {isTextArea ? (
            <textarea 
                className="contact-page__form--input-group--input" 
                id={id} 
                name={id} 
                rows={rows} 
                required={required}
            />
        ) : (
            <input 
                className="contact-page__form--input-group--input"
                type={type}
                id={id}
                name={id}
                required={required}
            />
        )}
    </div>
);

export default function ContactPage() {
    return (
        <main className="contact-page page-container">
            <Header />
            {gradientCirclesContact.map((circle, index) => (
				<GradientCircleResponsive key={index} {...circle} />
			))}
            <div className="contact-page__container container">
                <div className="contact-page__image-container">
                    <Image 
                        src="/assets/images/background/contact-image-bg.png"
                        fill
                        alt="Contact Background"
                        className="contact-page__image"
                        priority
                    />
                </div>
                
                <div className="contact-page__content">
                    <h1 className="contact-page__content--title">¿Tienes un proyecto en mente?</h1>
                    <h2 className="contact-page__content--subtitle">Conectemos y hagámoslo posible.</h2>
                    <p className="contact-page__content--description">
                        Estamos listos para ayudarte a optimizar tus sistemas eléctricos, recuperar activos o 
                        desarrollar soluciones a medida. Escríbenos y te responderemos lo antes posible.
                    </p>
                    
                    <div className="contact-page__form-container">
                        <form className="contact-page__form">
                            <div className="contact-page__form--input-group__names">
                                <InputGroup label="Nombre" id="name" />
                                <InputGroup label="Apellido" id="surname" />
                            </div>
                            <InputGroup label="Email" id="email" type="email" />
                            <InputGroup label="Mensaje" id="message" isTextArea />
                            <button type="submit" className="contact-page__form--button">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
