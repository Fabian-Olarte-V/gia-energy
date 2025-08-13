
import React from "react";
import Link from "next/link";
import { ServicesData } from "@/lib/servicesData/servicesData";
import GradientCircleResponsive from "@/components/Shared/GradientCircleResponsive";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import AboutUs from "@/components/AboutUs/AboutUs";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";
import { gradientCirclesHome } from "@/lib/layoutData/gradientData";
import "./page.scss";


export default function Home() {
	const servicesData = ServicesData.slice(0, 4);
	
	return (
		<main className="home-page page-container" style={{ position: 'relative' }}>
			{gradientCirclesHome.map((circle, index) => (
				<GradientCircleResponsive key={index} {...circle} />
			))}

			<div className="header-container">
				<Header alwaysVisible={false} />
			</div>

			<div className="hero-container">
				<Hero />
			</div>

			<section className="services-section container">
				<div className="services-section__content">
					<div className="services-section__title-container">
						<Label label="Nuestros Servicios" color='#ffead7ff' textColor='#ff7300ff'/>	
						<h1 className="services-section__title title-template">
							<span className="subtitle-template">Confianza Que</span> Impulsa Resultados
						</h1>
					</div>
					<div className="services-section__description-container">
						<p className="services-section__description description-template">
							Entregamos soluciones de ingeniería eléctrica que identifican fallas ocultas, extienden 
							la vida útil de tus activos y mejoran el desempeño de tus sistemas de generación.
						</p>
					</div>
				</div>

				<div className="services-section__services">
					{servicesData.map((card, index) => (
						<div className="service-card-container" key={index}>
							<ServiceCard data={card} expanded={false} />
						</div>
					))}
				</div>
				
				<Link className="services-section__button button-template" href='/servicios'>
					Ver Todos Los Servicios
				</Link>
			</section>

			<section className="stats-badge-container">
				<StatsBadge />
			</section>

			<section className="results-section-container">
				<div className="results-section-container__title-container">
					<Label label="Casos De Éxito" color='#ffead7ff' textColor='#ff7300ff' />
					<h1 className="results-section-container__title title-template">
						<span className="subtitle-template">Resultados</span> que hablan por sí solos
					</h1>
					<p className="results-section-container__description description-template">
						Nuestros proyectos demuestran nuestro compromiso con la excelencia.
					</p>
				</div>
				<Results />
			</section>

			<div className="bottom-section">
				<div className="about-us-container">
					<AboutUs />
				</div>
				<Footer />
			</div>
		</main>
	);
}
