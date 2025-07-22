import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Label from "@/components/Shared/Label/Label";
import ResultCard from "@/components/ResultCard/ResultCard/ResultCard";
import { statsData } from "@/lib/initialData/initialData";
import { resultsData } from "@/lib/resultsData/resultsData";
import type { Result } from "@/interfaces/result/resultCard.interface";
import GradientCircleResponsive from "@/components/Shared/GradientCircleResponsive";
import { gradientCirclesResults } from "@/lib/layoutData/gradientData";
import "./page.scss";

export default function ResultsPage() {
    const results: Result[] = resultsData;

    const renderHeroStats = () => (
        <div className="results-page__hero-stats-container page-container">    
            {statsData.map((stat, index) => (
                <div key={index} className="results-page__hero-stats-container--item">
                    <p className="results-page__hero-stats-container--item--data">
                        {stat.label}
                    </p>
                    <p className="results-page__hero-stats-container--item--description">
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    );

    return (
        <main className="results-page">
            <Header />
            {gradientCirclesResults.map((circle, index) => (
				<GradientCircleResponsive key={index} {...circle} />
			))}
            <div className="results-page__container container">
                <div className="results-page__hero">
                    <div className="results-page__hero-title-container">
                        <Label 
                            label="Casos De Éxito" 
                            color='#ffead7ff' 
                            textColor='#ff7300ff' 
                        />
                        <h1 className="results-page__hero-title-container--title title-template">
                            Donde la ingeniería se traduce en <span className="results-page__hero-title-container--highlight"> resultados</span>
                        </h1>
                        <p className="results-page__hero-title-container--description description-template">
                            Descubre cómo nuestros proyectos han transformado centrales y sistemas eléctricos, 
                            logrando mejoras técnicas, operativas y económicas tangibles. Cada solución está respaldada 
                            por experiencia en campo y análisis especializado que garantizan resultados sostenibles.
                        </p>
                        <div className="results-page__hero-title-container--button-container">
                            <Link 
                                className="results-page__hero-title-container--button button-template" 
                                href="/contacto"
                            >
                                Solicita tu cotización
                            </Link>
                        </div>
                    </div>
                    {renderHeroStats()}
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
