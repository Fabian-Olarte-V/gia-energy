import React from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import "./page.scss";


export default function Home() {
	return (
		<main className="home-page page-container">
			<div className="home-page__header">
				<Header dynamicBackground={true} />
			</div>
			<div className="home-page__main-content">
				<div className="home-page__hero">
					<Hero />
				</div>
				<section className="aboutus-section container">
					<div className="aboutus-section__content">
						<div className="aboutus-section__title-container">
							<h1 className="aboutus-section__title">
								Más <span className="aboutus-section__title--highlight">ahorro</span> hoy, más libertad mañana
							</h1>
						</div>
						<div className="aboutus-section__stats-badge">
							<StatsBadge />
						</div>
						<div className="aboutus-section__description-container">
							<Label label="Nuestras soluciones energéticas" textColor='#0F3529' />
							<ServiceList />
						</div>
					</div>
				</section>
				<section className="about-section">
					<video
						className="about-section__video-bg"
						src="/videos/aboutVideoBackground.mp4"
						autoPlay
						loop
						muted
						playsInline
					/>
					<div className="about-section__overlay" />
					<div className="about-section__content container">
						<div className="about-section__title-container">
							<Label label="Quienes Somos" textColor='#fff' />
							<div className="about-section__content-container">
								<h1 className="about-section__title">
									Energía eficiente, limpia y sostenible para hogares y empresas.
									En GIA Energy lideramos el cambio hacia un futuro solar inteligente.
								</h1>
								<p className="about-section__description description-template">
									En GIA Energy diseñamos, instalamos y monitoreamos sistemas solares que 
									convierten tu consumo eléctrico en una inversión. Con proyectos ejecutados 
									en Villavicencio y la región, ofrecemos soluciones confiables que garantizan 
									ahorro real, seguridad y sostenibilidad.
								</p>
								<div className="about-section__stats-badge">
									<div className="about-section__badge">
										<span>Proyectos certificados</span>
									</div>
									<div className="about-section__badge">
										<span>Monitoreo 24/7</span>
									</div>
									<div className="about-section__badge">
										<span>Energía limpia</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="results-section">
					<h1 className="aboutus-section__title aboutus-section__title--results container">
						Cómo Hemos Transformado el <span className="aboutus-section__title--highlight">Consumo de Energía</span>
					</h1>
					<Results />
				</section>

				<section className="contact-section">
					<div className="contact-section__title-container container">
						<h1 className="contact-section__title">
							¿Tienes un proyecto en mente?
						</h1>
					</div>
					<div className="contact-section__content-container container">
						<Label label="Contacto" textColor='#fff' />
						<p className="contact-section__description description-template">
							En GIA, transformamos la energía del sol en soluciones sostenibles 
							para hogares y empresas. Te ayudamos a reducir costos, proteger 
							el medio ambiente y aprovechar al máximo la energía limpia 
							con nuestros sistemas de paneles solares y tecnologías renovables.
						</p>
						<Link className="contact-section__button button-template" href='/contacto'>
							Contáctanos
						</Link>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
