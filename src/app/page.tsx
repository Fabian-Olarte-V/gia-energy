import React from "react";
import Link from "next/link";
import { ServicesData } from "@/lib/servicesData/servicesData";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBadge from "@/components/StatsBadge/StatsBadge";
import Label from "@/components/Shared/Label/Label";
import Results from "@/components/Results/Results";
import Image from "next/image";
import ArrowIcon from "@/components/Shared/IconsSvg/ArrowIcon/ArrowIcon";
import serviceImage from "public/assets/images/home/home_services_image.jpg";
import aboutImageSolarPanel from "public/assets/images/icon/solar-panel.png";
import aboutImageSun from "public/assets/images/icon/sun.png";
import aboutUsImage from "public/assets/images/home/home_aboutus_image.jpg";
import giaIconBlack from "public/assets/images/icon/giaIconBlack.png";
import "./page.scss";

export default function Home() {
	const servicesData = ServicesData.slice(0, 5);
	
	return (
		<main className="home-page page-container" style={{ position: 'relative' }}>
			<div className="header-container">
				<Header />
			</div>

			<div className="hero-container">
				<Hero />
			</div>

			<section className="aboutus-section container">
				<div className="aboutus-section__content">
					<div className="aboutus-section__title-container">
						<Label label="Conoce Sobre Nosotros" textColor='#0F3529'/>	
						<h1 className="aboutus-section__title">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
							eu mollis justo. Aenean porttitor vitae leo eget maximus.
						</h1>
					</div>
					<div className="aboutus-section__description-container">
						<div className="aboutus-section__description-container__image-container">
							<Image 
								src={aboutUsImage}
								alt="About Us" 
								fill
							/>
						</div>
						<div className="aboutus-section__description-container__info-container">
							<div>
								<p className="aboutus-section__description description-template">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
									eu mollis justo. Aenean porttitor vitae leo eget maximus.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
									eu mollis justo. Aenean porttitor vitae leo eget maximus.
								</p>
								<StatsBadge />
							</div>
							<div className="aboutus-section__description__image-container">
								<Image 
									src={giaIconBlack}
									alt="About Us" 
									fill
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="services-section container">
				<div className="services-section__content">
					<div className="services-section__title-container">
						<Label label="Nuestros Servicios" textColor='#0F3529'/>	
						<h1 className="services-section__title ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h1>
						<div>
							<Link className="services-section__button button-template" href='/servicios'>
								Explorar todos
							</Link>
						</div>
					</div>
				</div>

				<div className="services-section__services">
					<div className="services-section__description-container__image-container">
						<Image 
							src={serviceImage} 
							alt="About Us" 
							fill
						/>
					</div>
					<div className="services-section__description-container__info-container">
						{servicesData.map((card, index) => (
							<Link href={`/servicios`} className="services-section__service-card" key={index}>
								<div>
									<p className="services-section__service-card--category">{card.category}</p>
									<h1 className="services-section__service-card--title">{card.title}</h1>
								</div>
								<div className="services-section__service-card--icon">
									<ArrowIcon rotation={180} />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="about-section">
				<div className="about-section__image-container--sun">
					<Image 
						src={aboutImageSun} 
						alt="About Us" 
						fill
					/>
				</div>
				<div className="about-section__content container">
					<div className="about-section__title-container">
						<Label label="Quienes Somos" textColor='#fff'/>	
						<div className="about-section__content-container">
							<h1 className="about-section__title ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Nam ultricies libero ac aliquet pulvinar.
							</h1>
							<p className="about-section__description description-template">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
								eu mollis justo. Aenean porttitor vitae leo eget maximus.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Nam ultricies libero ac aliquet pulvinar. Nullam eu auctor nisi, 
								eu mollis justo. Aenean porttitor vitae leo eget maximus.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							</p>
							<Link className="about-section__button button-template" href='/servicios'>
								Solicita Tu Cotización
							</Link>
						</div>
					</div>
				</div>
				<div className="about-section__image-container--solar-panel">
					<Image 
						src={aboutImageSolarPanel} 
						alt="About Us" 
						fill
					/>
				</div>
			</section>

			<section className="results-section-container ">
				<div className="results-section-container__title-container container">
					<Label label="Casos De Éxito" textColor='#000' />
					<h1 className="results-section-container__title ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nam ultricies libero ac aliquet pulvinar Nam ultricies libero ac aliquet pulvinar.
					</h1>
				</div>
				<Results />
			</section>

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

			<Footer />
		</main>
	);
}
