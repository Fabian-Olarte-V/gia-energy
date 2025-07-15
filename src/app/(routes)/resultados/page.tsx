import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import ExpandedResultCard from "@/components/ExpandedResultCard/ExpandedResultCard";
import { expandedResultCardData, statsData } from "@/lib/initialData/initialData";
import { IExpandedResultCardProps } from "@/interfaces/resultCard/resultCard.interface";
import "./page.scss";


export default function ResultsPage() {
    const results: IExpandedResultCardProps[] = expandedResultCardData;

    return (
        <main className="results-page">
            <Header />
            <div className="results-page__container container">
                <div className="results-page__hero">
                    <div className="results-page__hero-title-container">
                        <h1 className="results-page__hero-title-container--title title-template">Donde la ingeniería se <br className="break-line"/> traduce en resultados</h1>
                        <p className="results-page__hero-title-container--description description-template">
                            Explora los proyectos donde nuestras soluciones generaron mejoras 
                            técnicas, operativas y económicas para nuestros clientes.
                        </p>
                        <div className="results-page__hero-title-container--button-container">
                            <Link className="results-page__hero-title-container--button button-template" href={'/contacto'}>Solicita tu cotización</Link>
                        </div>
                    </div>
                    <div className="results-page__hero-stats-container">    
                        {statsData.map((stat, index) => (
                            <div key={index} className="results-page__hero-stats-container--item">
                            <p className="results-page__hero-stats-container--item--data">{stat.label}</p>
                            <p className="results-page__hero-stats-container--item--description">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                    <Link className="results-page__hero-title-container--button results-page__hero-title-container--button--mobile button-template" href={'/contacto'}>Solicita tu cotización</Link>
                </div>
                <div className="results-page__content">
                    {results.map((result, index) => (
                        <div key={index} className="results-page__content--item">
                            <ExpandedResultCard data={result} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
