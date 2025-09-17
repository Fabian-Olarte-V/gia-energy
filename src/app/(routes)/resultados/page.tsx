import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Label from "@/components/Shared/Label/Label";
import ResultCard from "@/components/ResultCard/ResultCard/ResultCard";
import { resultsData } from "@/lib/resultsData/resultsData";
import "./page.scss";

const HeroSection = () => (
    <section className="results-page__hero">
        <div className="results-page__hero-content">
            <h1 className="results-page__hero-title">
                Your Essential Source for Global Solutions
            </h1>
            <p className="results-page__hero-description description-template">
                Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir costos, 
                evitar fallas y mejorar el rendimiento de tus equipos desde el primer día.
            </p>
            <Link 
                href="/contacto"
                className="results-page__hero-button button-template" 
            >
                Solicita tu cotización
            </Link>
        </div>
    </section>
);

const ResultsGrid = () => (
    <section className="results-page__grid">
        {resultsData.map((result, index) => (
            <div 
                key={`${result.title.slice(0, 20)}-${index}`} 
                className="results-page__grid-item"
            >
                <ResultCard data={result} />
            </div>
        ))}
    </section>
);

export default function ResultsPage() {
    return (
        <main className="results-page">
            <Header blackItems={true} />
            <div className="results-page__container container">
                <HeroSection />
                <ResultsGrid />
            </div>
            <Footer />
        </main>
    );
}
