import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Label from "@/components/Shared/Label/Label";
import { ServicesData } from "@/lib/servicesData/servicesData";
import "./page.scss";


export default function ServicesPage() {
    return (
        <main className="services-page page-container">
            <Header blackItems={true} />
            <div className="services-page__container container">
                <section className="services-page__hero">
                    <div className="services-page__hero-content">
                        <Label 
                            label="Servicios" 
                            textColor="#0F3529"
                        />	
                        <h1 className="services-page__hero-title">
                            Your Essential Source for Global Solutions
                        </h1>
                        <div className="services-page__hero--mobile-content">
                            <p className="services-page__hero-description services-page__hero-description--mobile description-template">
                                Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir 
                                costos, evitar fallas y mejorar el rendimiento de tus equipos desde el 
                                primer día.
                            </p>
                        </div>
                    </div>
                    <div className="services-page__hero-image">
                        <p className="services-page__hero-description description-template">
                            Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir 
                            costos, evitar fallas y mejorar el rendimiento de tus equipos desde el 
                            primer día. Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir 
                            costos, evitar fallas y mejorar el rendimiento de tus equipos desde el 
                            primer día.
                        </p>
                    </div>
                </section>
                <div className="services-page__image-container"></div>
                <ServicesSection initialData={ServicesData} />
            </div>
            <Footer />
        </main>
    );
}
