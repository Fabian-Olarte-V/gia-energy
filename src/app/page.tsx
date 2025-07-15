"use client";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import AboutUs from "@/components/AboutUs/AboutUs";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";
import { serviceCardsData } from "@/lib/initialData/initialData";
import Link from "next/link";
import "./page.scss";

export default function Home() {
	const servicesData = serviceCardsData;
	
	return (
		<main className="home-page">
			<div className="header-container">
				<Header alwaysVisible={false} />
			</div>

			<div className="hero-container">
				<Hero />
			</div>

			<div className="services-section container">
				<div className="services-section__content">
					<div className="services-section__title-container">
						<Label label="SERVICIOS" />
						<h1 className="services-section__title title-template">
							<span className="subtitle-template">Confianza Que</span> Impulsa Resultados
						</h1>
					</div>
					<div className="services-section__description-container">
						<p className="services-section__description description-template">
							Brindamos soluciones eléctricas que reducen fallas, alargan la
							vida útil de tus equipos y optimizan tu operación con tecnología y
							experiencia comprobada. Nuestro enfoque está orientado a resultados
							reales con mínima inversión y máxima eficiencia.
						</p>
						<Link className="services-section__button button-template" href={'/servicios'}>Ver Servicios</Link>
					</div>
				</div>
				<div className="services-section__services">
					{servicesData.map((card, index) => (
						<div className="service-card-container" key={index}>
							<ServiceCard data={card} expanded={false} />
						</div>
					))}
				</div>
			</div>

			<div className="stats-badge-container">
				<StatsBadge />
			</div>

			<div className="results-section-container">
				<div className="results-section-container__title-container">
					<Label label="CASOS DE ÉXITO" />
					<h1 className="results-section-container__title title-template">
						<span className="subtitle-template">Resultados</span> que hablan por sí solos
					</h1>
				</div>
				<Results />
			</div>
		
			<div className="bottom-section">
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
