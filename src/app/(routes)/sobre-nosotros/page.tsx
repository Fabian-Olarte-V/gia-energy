import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import "./page.scss";

export default function AboutPage() {
    return (
        <main className="about-page">
            <Header />
            <div className="about-page__container container">
                <div className="about-page__hero">
                    <div className="about-page__hero__title-container">
                        <h1 className="about-page__hero__title-container--title decoration title-template">Sobre Nosotros</h1>
                        <p className="about-page__hero__title-container--description description-template">
                            Somos una empresa especializada en soluciones eléctricas 
                            para centrales de generación y sistemas críticos. Combinamos experiencia, 
                            innovación y precisión técnica para optimizar el rendimiento de los activos 
                            eléctricos de nuestros clientes.
                        </p>
                    </div>
                    <div className="about-page__hero__title-container about-page__hero__title-container--secondary">
                        <p className="about-page__hero__title-container--description description-template">
                            Contamos con una sólida trayectoria desarrollando proyectos en generación 
                            eléctrica, redes de media y baja tensión, mantenimiento predictivo y reingeniería 
                            de plantas. Conocemos a fondo la normativa ISO y los desafíos del sector energético.
                        </p>
                        <h1 className="about-page__hero__title-container--title title-template"><span className="subtitle-template">+15 Años</span> Generando <br className="break-line"/> Confianza Técnica</h1>
                    </div>
                </div>
            </div>  
            <div>
                <div className="about-page__qualities">
                    <div className="container">
                        <h1 className="about-page__qualities--title title-template">Lo Que Nos Mueve <br className="break-line"/> Como Equipo</h1>
                        <div className="about-page__qualities__container">
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Calidad Técnica</h3>
                                <p className="about-page__qualities__container--item--description">Ejecutamos cada servicio bajo altos estándares y normas internacionales.</p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Compromiso Con El cliente</h3>
                                <p className="about-page__qualities__container--item--description">Ofrecemos soluciones a medida que priorizan eficiencia y resultados.</p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Innovación</h3>
                                <p className="about-page__qualities__container--item--description">Incorporamos tecnología avanzada y automatización inteligente.</p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Responsabilidad</h3>
                                <p className="about-page__qualities__container--item--description">Evaluamos riesgos, protegemos tus activos y evitamos fallas críticas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="about-page__team">
                    <h1 className="about-page__team--title title-template">Liderazgo con experiencia <br/> comprobada</h1>
                    <p className="about-page__team--description description-template">
                        Nuestro equipo está liderado por el Ing. José Iván Velásquez y el Ing. 
                        Oscar Quintero, profesionales con amplia trayectoria en operación de centrales, 
                        reparación de generadores, análisis de fallas y modernización de redes eléctricas.
                    </p>
                    <div className="about-page__team__container">
                        <div className="about-page__team__container--item">
                            <Image 
                                className="about-page__team__container--item--image"
                                src={"/assets/images/service-1.png"}
                                width={200}
                                height={200}
                                alt="José Iván Velásquez"
                            />
                            <h3 className="about-page__team__container--item--name">Ing. José Iván Velásquez</h3>
                            <p className="about-page__team__container--item--role">Especialista en operación de centrales y reparación de generadores.</p>
                        </div>
                        <div className="about-page__team__container--item">
                            <Image 
                                className="about-page__team__container--item--image"
                                src={"/assets/images/service-5.png"}
                                width={200}
                                height={200}
                                alt="Oscar Quintero"
                            />
                            <h3 className="about-page__team__container--item--name">Ing. Oscar Quintero</h3>
                            <p className="about-page__team__container--item--role">Experto en análisis de fallas y modernización de redes eléctricas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
