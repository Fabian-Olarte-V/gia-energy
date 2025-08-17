import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Label from "@/components/Shared/Label/Label";
import ResultCard from "@/components/ResultCard/ResultCard/ResultCard";
import { resultsData } from "@/lib/resultsData/resultsData";
import "./page.scss";

export default function ResultsPage() {
    return (
        <main className="results-page">
            <Header blackItems={true} />

            <div className="results-page__container container">
                <div className="results-page__hero">
                    <div className="results-page__hero-title-container">
                        <Label 
                            label="Casos De Éxito" 
                            textColor="#0F3529" 
                        />
                        <h1 className="results-page__hero-title-container--title">
                            Your Essential Source for Global Solutions
                        </h1>
                        <p className="results-page__hero-title-container--description description-template">
                            Conoce nuestros servicios eléctricos diseñados para ayudarte a reducir costos, 
                            evitar fallas y mejorar el rendimiento de tus equipos desde el primer día.
                        </p>
                        <div className="results-page__hero-title-container--button-container">
                            <Link 
                                href="/contacto"
                                className="results-page__hero-title-container--button button-template" 
                            >
                                Solicita tu cotización
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="results-page__content">
                    {resultsData.map((result, index) => (
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
