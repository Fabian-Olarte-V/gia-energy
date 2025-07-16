import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import "./page.scss";
import Link from "next/link";
import { ServicesData } from "@/lib/servicesData/servicesData";


export default function ServicesPage() {
    return (
        <main className="services-page">
            <Header />
            <div className="services-page__container container">
                <div className="services-page__hero">
                    <div className="services-page__hero-content">
                        <h1 className="services-page__hero-title title-template"><span className="subtitle-template">Soluciones que funcionan, </span> energía que rinde</h1>
                        <p className="services-page__hero-description description-template">
                            Explora nuestros servicios de ingeniería eléctrica pensados para diagnosticar, recuperar y potenciar 
                            tus sistemas de generación. Reducimos fallas, evitamos pérdidas y mejoramos el rendimiento de tus 
                            equipos desde la primera intervención, con precisión técnica y experiencia comprobada.
                        </p>
                        <div className="services-page__hero-button-container">
                            <Link href="/contacto" className="services-page__hero-button button-template">
                                Solicita tu cotización
                            </Link>
                        </div>
                    </div>
                    <div className="services-page__hero-image">
                        <div className="services-page__hero-image-container">
                            <Image 
                                src={"/assets/images/image.png"}
                                fill
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>
                <ServicesSection initialData={ServicesData} />
            </div>
            <Footer />
        </main>
    );
}
