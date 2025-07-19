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
                            En VQ Global Ingeniería brindamos soluciones eléctricas especializadas para centrales 
                            de generación y sistemas de alta criticidad. Nos enfocamos en el diagnóstico, 
                            recuperación, mantenimiento y optimización de activos mediante pruebas avanzadas y  
                            análisis técnicos. Ayudamos a nuestros clientes a 
                            extender la vida útil de sus equipos, reducir fallas y operar con máxima eficiencia.
                        </p>
                    </div>
                    <div className="about-page__hero__title-container about-page__hero__title-container--secondary">
                        <p className="about-page__hero__title-container--description description-template">
                            Respaldados por más de 40 años de experiencia técnica, hemos desarrollado proyectos 
                            en generación eléctrica, mantenimiento predictivo, redes de media y baja 
                            tensión y modernización de plantas. Nuestro equipo domina la normativa IEEE 
                            y está preparado para afrontar los retos más complejos del sector energético.
                        </p>
                        <h1 className="about-page__hero__title-container--title title-template"><span className="subtitle-template">+40 Años</span> Generando <br className="break-line"/> Confianza Técnica</h1>
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
                                <p className="about-page__qualities__container--item--description">
                                    Aplicamos metodologías certificadas y normas internacionales para garantizar resultados precisos, 
                                    seguros y duraderos en cada intervención.
                                </p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Compromiso Con El cliente</h3>
                                <p className="about-page__qualities__container--item--description">
                                    Escuchamos tus necesidades, diseñamos soluciones personalizadas y acompañamos 
                                    todo el proceso para asegurar eficiencia real y mejora continua.
                                </p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Innovación</h3>
                                <p className="about-page__qualities__container--item--description">
                                    Implementamos tecnologías de diagnóstico, automatización y 
                                    análisis predictivo para maximizar la eficiencia y 
                                    anticiparnos a los riesgos.
                                </p>
                            </div>
                            <div className="about-page__qualities__container--item">
                                <h3 className="about-page__qualities__container--item--title">Responsabilidad</h3>
                                <p className="about-page__qualities__container--item--description">
                                    Protegemos tus activos críticos evaluando riesgos con visión integral, 
                                    minimizando fallas y asegurando la continuidad operativa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="about-page__team">
                    <h1 className="about-page__team--title title-template">Liderazgo con experiencia <br/> comprobada</h1>
                    <p className="about-page__team--description description-template">
                        Nuestro equipo está liderado por los ingenieros José Iván Velásquez Duque y Oscar Quintero Valencia, 
                        referentes en el sector energético por su experiencia en diagnóstico, reparación y 
                        modernización de sistemas eléctricos. Su conocimiento técnico ha sido clave en proyectos 
                        de alta complejidad para centrales hidroeléctricas, térmicas y redes de distribución.
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
                            <h3 className="about-page__team__container--item--name">Ing. José Iván Velásquez Duque</h3>
                            <p className="about-page__team__container--item--role">Especialista en operación de centrales, análisis de fallas y reparación de generadores.</p>
                        </div>
                        <div className="about-page__team__container--item">
                            <Image 
                                className="about-page__team__container--item--image"
                                src={"/assets/images/service-5.png"}
                                width={200}
                                height={200}
                                alt="Oscar Quintero"
                            />
                            <h3 className="about-page__team__container--item--name">Ing. Oscar Quintero Valencia</h3>
                            <p className="about-page__team__container--item--role">Especialista en pruebas y modernización de redes electricas</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
