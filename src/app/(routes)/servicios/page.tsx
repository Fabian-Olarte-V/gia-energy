"use client";
import React, { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import { ServicesData } from "@/lib/servicesData/servicesData";
import { servicesCategoryData } from "@/lib/servicesData/servicesCategoryData";
import { useSearchParams } from 'next/navigation';
import "./page.scss";

function ServicesContent() {
    const searchParams = useSearchParams();
    const tipo = searchParams.get('tipo') || 'todos';
    const validTypes = ['energia-solar', 'instalacion', 'mantenimiento', 'todos'];
    const normalizedTipo = validTypes.includes(tipo) ? tipo : 'todos';
    const categoryData = servicesCategoryData[normalizedTipo];

    const { title, description, backgroundImage } = categoryData;

    return (
        <div className="services-page__container container">
            <section className="services-page__hero">
                <div className="services-page__hero-content">
                    <h1 className="services-page__hero-title">{title}</h1>
                    <div className="services-page__hero--mobile-content">
                        <p className="services-page__hero-description services-page__hero-description--mobile description-template">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="services-page__hero-image">
                    <p className="services-page__hero-description description-template">
                        {description}
                    </p>
                </div>
            </section>
            <div 
                className="services-page__image-container" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <ServicesSection 
                initialData={ServicesData}
                categoryType={tipo} 
            />
        </div>
    );
}

export default function ServicesPage() {
    return (
        <main className="services-page page-container">
            <Header blackItems={true} />
                <Suspense fallback={<div className="services-page__container container">Cargando...</div>}>
                    <ServicesContent />
                </Suspense>
            <Footer />
        </main>
    );
}
