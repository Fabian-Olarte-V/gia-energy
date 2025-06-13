"use client";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import "./page.scss";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import AboutUs from "@/components/AboutUs/AboutUs";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";

const serviceCardsData = [
	{
		title: "Recuperación de Generadores de Alta Tensión",
		description:
			"Reconstrucción de bobinados y aislamiento para extender la vida útil en más del 150%.",
		backgroundImage: "/assets/images/bottom-background.jpg",
	},
	{
		title: "Repotenciación de Centrales de Generación",
		description:
			"Mejoramos equipos antiguos para aumentar eficiencia sin reemplazos costosos.",
		backgroundImage: "/assets/images/bottom-background.jpg",
	},
	{
		title: "Automatización y Análisis de Fallas",
		description: "Automatizamos procesos críticos y reducimos tiempos de parada.",
		backgroundImage: "/assets/images/bottom-background.jpg",
	},
	{
		title: "Evaluación de Riesgos Eléctricos",
		description: "Identificamos fallas críticas y aplicamos análisis RCA.",
		backgroundImage: "/assets/images/bottom-background.jpg",
	},
];

export default function Home() {
	return (
		<main>
			<div className="header-container">
				<Header />
			</div>
			<div className="hero-container">
				<Hero />
			</div>

			<div className="services-section container">
				<div className="services-section__content">
					<div className="services-section__title-container">
						<Label label="SERVICIOS" />
						<h1 className="services-section__title">
							<span>Confianza Que</span> Impulsa Resultados
						</h1>
					</div>
					<div className="services-section__description-container">
						<p className="services-section__description">
							Brindamos soluciones eléctricas que reducen fallas, alargan la
							vida útil de tus equipos y optimizan tu operación con tecnología y
							experiencia comprobada. Nuestro enfoque está orientado a resultados
							reales con mínima inversión y máxima eficiencia.
						</p>
						<button className="services-section__button">Ver Servicios</button>
					</div>
				</div>
				<div className="services-section__services">
					{serviceCardsData.map((card, index) => (
						<div className="service-card-container" key={index}>
							<ServiceCard
								title={card.title}
								description={card.description}
								backgroundImage={card.backgroundImage}
							/>
						</div>
					))}
				</div>
			</div>

			<Results />

			<div className="bottom-section">
				<div className="stats-badge-container">
					<StatsBadge />
				</div>

				<div className="about-us-container">
					<AboutUs />
				</div>

				<div className="footer-container">
					<Footer />
				</div>
			</div>
		</main>
	);
}
