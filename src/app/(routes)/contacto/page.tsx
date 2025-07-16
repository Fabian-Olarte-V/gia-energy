import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import "./page.scss";

export default function ContactPage() {
    return (
        <main className="contact-page">
            <Header />
            <div className="contact-page__container container">
                <div className="contact-page__image-container">
                    <Image 
                        src={"/assets/images/service-1.png"}
                        fill
                        alt="Hero Image"
                        className="contact-page__image"
                    />
                </div>
                <div className="contact-page__content">
                    <h1 className="contact-page__content--title">¿Tienes un proyecto en mente?</h1>
                    <h1 className="contact-page__content--subtitle">Conectemos y hagámoslo posible.</h1>
                    <p className="contact-page__content--description">
                        Estamos listos para ayudarte a optimizar tus sistemas eléctricos, recuperar activos o 
                        desarrollar soluciones a medida. Escríbenos y te responderemos lo antes posible.
                    </p>
                    <div className="contact-page__form-container">
                        <form className="contact-page__form"> 
                            <div className="contact-page__form--input-group__names">
                                <div className="contact-page__form--input-group__names--input-group">
                                    <label 
                                        className="contact-page__form--input-group__names--input-group--label" 
                                        htmlFor="name"
                                    >
                                        Nombre
                                    </label>
                                    <input 
                                        className="contact-page__form--input-group__names--input-group--input" 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                    />
                                </div>
                                <div className="contact-page__form--input-group__names--input-group">
                                    <label 
                                        className="contact-page__form--input-group__names--input-group--label" 
                                        htmlFor="surname"
                                    >
                                        Apellido
                                    </label>
                                    <input 
                                        className="contact-page__form--input-group__names--input-group--input" 
                                        type="text" 
                                        id="surname" 
                                        name="surname" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="contact-page__form--input-group">
                                <label 
                                    className="contact-page__form--input-group--label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input className="contact-page__form--input-group--input"  type="email" id="email" name="email" required />
                            </div>
                            <div className="contact-page__form--input-group">
                                <label 
                                    className="contact-page__form--input-group--label" 
                                    htmlFor="message"
                                >
                                    Mensaje
                                </label>
                                <textarea className="contact-page__form--input-group--input" id="message" name="message" rows={4} required></textarea>
                            </div>
                            <button type="submit" className="contact-page__form--button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
