import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Label from "@/components/Shared/Label/Label";
import { ServicesData } from "@/lib/servicesData/servicesData";
import GradientCircleResponsive from "@/components/Shared/GradientCircleResponsive";
import { gradientCirclesServices } from "@/lib/layoutData/gradientData";
import "./page.scss";


export default function ServicesPage() {
    return (
        <main className="services-page page-container">
            {gradientCirclesServices.map((circle, index) => (
				<GradientCircleResponsive key={index} {...circle} />
			))}
            <Header />
            <div className="services-page__container container">
                <section className="services-page__hero">
                    <div className="services-page__hero-content">
                        <Label 
                            label="Nuestros Servicios" 
                            color="#d4ebffff" 
                            textColor="#004C99"
                        />	
                        <h1 className="services-page__hero-title title-template">
                            Soluciones que <span className="services-page__hero-highlight">funcionan, </span> energía que rinde
                        </h1>
                        <p className="services-page__hero-description description-template">
                            Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir 
                            costos, evitar fallas y mejorar el rendimiento de tus equipos desde el 
                            primer día.
                        </p>
                        <div className="services-page__hero-button-container">
                            <Link 
                                href="/contacto" 
                                className="services-page__hero-button button-template"
                            >
                                Solicita tu cotización
                            </Link>
                        </div>
                    </div>
                    <div className="services-page__hero-image">
                        <div className="services-page__hero-image-container">
                            <Image 
                                src="/assets/images/background/services-image-bg.png"
                                fill
                                alt="Hero Image"
                                priority
                            />
                        </div>
                    </div>
                </section>
                <ServicesSection initialData={ServicesData} />
            </div>
            <Footer />
        </main>
    );
}
