import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import serviceSolar from "public/assets/images/services/services_image.jpg";
import "./page.scss";


export default function Home() {
	return (
		<main className="home-page page-container" style={{ position: 'relative' }}>
			<div className="home-page__header">
				<Header />
			</div>
			<div className="home-page__main-content">
				<div className="hero-container">
					<Hero />
				</div>
				<section className="aboutus-section container">
					<div className="aboutus-section__content">
						<div className="aboutus-section__title-container">
							<h1 className="aboutus-section__title">
								Más ahorro, más valor, un futuro más <span className="aboutus-section__title--highlight">verde</span>
							</h1>
						</div>
						<div className="aboutus-section__stats-badge">
							<StatsBadge />
						</div>
						<div className="aboutus-section__description-container">
							<Label label="Nuestros Servicios" textColor='#0F3529'/>
							<ServiceList backgroundImage={serviceSolar.src} />
						</div>
					</div>
				</section>
				<section className="about-section">
					<div className="about-section__image-container--sun">
						<Image
							src={"assets/images/icon/sun.png"} 
							alt="About Us" 
							fill
						/>
					</div>
					<div className="about-section__content container">
						<div className="about-section__title-container">
							<Label label="Quienes Somos" textColor='#fff'/>
							<div className="about-section__content-container">
								<h1 className="about-section__title ">
									GIA ENERGY lidera la transición energética y redefine el consumo de energía en hogares y empresas
								</h1>
								<p className="about-section__description description-template">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
									eu mollis justo. Aenean porttitor vitae leo eget maximus.
								</p>
								<div className="about-section__stats-badge">
									<div className="about-section__badge">
										<span>RETIE NTC 20553</span>
									</div>
									<div className="about-section__badge">
										<span>Monitoreo 24/7</span>
									</div>
									<div className="about-section__badge">
										<span>Financiacion a medida</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="about-section__image-container--solar-panel">
						<Image 
							src={"assets/images/icon/solar-panel.png"} 
							alt="About Us" 
							fill
						/>
					</div>
				</section>
				<div className="results-section-container ">
					<h1 className="aboutus-section__title aboutus-section__title--results container">
						Cómo Hemos Transformado el <span className="aboutus-section__title--highlight">Consumo de Energía</span>
					</h1>
					<Results />
				</div>
				<section className="contact-section-container ">
					<div className="contact-section-container__title-container container">
						<h1 className="contact-section-container__title ">
							¿Tienes Un Proyecto En Mente?
						</h1>
					</div>
					<div className="contact-section-container__content-container container">
						<Label label="Contacto" textColor='#fff' />
						<p className="contact-section-container__description description-template">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies 
							libero ac aliquet pulvinar. Nullam eu auctor nisi, eu mollis justo. 
							Aenean porttitor vitae leo eget maximus. 
						</p>
						<Link className="contact-section-container__button button-template" href='/contacto'>
							Contáctanos
						</Link>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
