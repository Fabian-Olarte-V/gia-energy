import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { statsData } from "@/lib/initialData/initialData";
import { Result } from "@/interfaces/result/resultCard.interface";
import { resultsData } from "@/lib/resultsData/resultsData";
import ResultCard from "@/components/ResultCard/ResultCard/ResultCard";
import "./page.scss";

export default function ResultsPage() {
    const results: Result[] = resultsData;

    return (
        <main className="results-page">
            <Header />
            <div className="results-page__container container">
                <div className="results-page__hero">
                    <div className="results-page__hero-title-container">
                        <h1 className="results-page__hero-title-container--title title-template">Donde la ingeniería se <br className="break-line"/> traduce en resultados</h1>
                        <p className="results-page__hero-title-container--description description-template">
                            Descubre cómo nuestros proyectos han transformado centrales y sistemas eléctricos, 
                            logrando mejoras técnicas, operativas y económicas tangibles. Cada solución está respaldada 
                            por experiencia en campo y análisis especializado que garantizan resultados sostenibles.
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
                            <ResultCard data={result} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
