import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Label from "@/components/Shared/Label/Label";
import GradientCircleResponsive from "@/components/Shared/GradientCircleResponsive";
import { qualityItems, teamMembers } from "@/lib/aboutData/aboutData";
import { gradientCirclesAboutUs } from "@/lib/layoutData/gradientData";
import QualityIcon from "@/components/Shared/IconsSvg/ValuesIcons/QualityIcon";
import ClientIcon from "@/components/Shared/IconsSvg/ValuesIcons/ClientIcon";
import InnovationIcon from "@/components/Shared/IconsSvg/ValuesIcons/InnovationIcon";
import ResponsabilityIcon from "@/components/Shared/IconsSvg/ValuesIcons/ResponsabilityIcon";
import "./page.scss";


function getIconForStat(index: number) {
    if (index == 0) return <QualityIcon size={44} />;
    if (index == 1) return <ClientIcon size={44} />;
    if (index == 2) return <InnovationIcon size={44} />;
    if (index == 3) return <ResponsabilityIcon size={44} />;
}


export default function AboutPage() {
    return (
        <main className="about-page page-container">
            <Header />
            {gradientCirclesAboutUs.map((circle, index) => (
				<GradientCircleResponsive key={index} {...circle} />
			))}
            <div className="about-page__container container">
                <section className="about-page__hero">
                    <div className="about-page__hero__title-container">
                        <Label 
                            label="Generando Confianza Tecnica" 
                            color='#d4ebffff' 
                            textColor='#004C99'
                        />
                        <h1 className="about-page__hero__title-container--title decoration title-template">
                            Sobre Nosotros
                        </h1>
                    </div>
                    
                    <div className="about-page__hero__title-container about-page__hero__title-container--secondary">
                        <p className="about-page__hero__title-container--description description-template">
                            En VQ Global Ingeniería brindamos soluciones eléctricas especializadas para centrales 
                            de generación y sistemas de alta criticidad. Nos enfocamos en el diagnóstico, 
                            recuperación, mantenimiento y optimización de activos mediante pruebas avanzadas y  
                            análisis técnicos. Ayudamos a nuestros clientes a 
                            extender la vida útil de sus equipos, reducir fallas y operar con máxima eficiencia.
                        </p>
                        <p className="about-page__hero__title-container--description description-template">
                            <br />
                            Respaldados por más de 40 años de experiencia técnica, hemos desarrollado proyectos 
                            en generación eléctrica, mantenimiento predictivo, redes de media y baja 
                            tensión, y modernización de plantas de generación de energía eléctrica. Nuestro 
                            equipo domina la normativa IEEE y está preparado para afrontar los retos más complejos 
                            del sector energético.
                        </p>
                    </div>
                </section>
            </div>

            <section className="about-page__qualities">
                <div className="container">
                    <div className="about-page__qualities__title-container">
                        <Label 
                            label="Pasión Por Lo Que Hacemos" 
                            color='#ffead7ff' 
                            textColor='#ff7300ff'
                        />
                        <h2 className="about-page__qualities__title-container--title decoration title-template">
                            Nuestros Valores
                        </h2>
                    </div>

                    <div className="about-page__qualities__container">
                        {qualityItems.map((item, index) => (
                            <div key={index} className="about-page__qualities__container--item">
                                <div className="about-page__qualities__container--item--icon-bg">
                                    {getIconForStat(index)}
                                </div>
                                <h3 className="about-page__qualities__container--item--title">
                                    {item.title}
                                </h3>
                                <p className="about-page__qualities__container--item--description">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-page__team container">
                <Label 
                    label="Nuestro Equipo" 
                    color='#d4ebffff' 
                    textColor='#004C99'
                />
                <h2 className="about-page__team--title title-template">
                    Liderazgo con experiencia comprobada
                </h2>
                <p className="about-page__team--description description-template">
                    Nuestro equipo está liderado por los ingenieros José Iván Velásquez Duque y Oscar Quintero Valencia, 
                    referentes en el sector energético por su experiencia en diagnóstico, reparación y 
                    modernización de sistemas eléctricos. Su conocimiento técnico ha sido clave en proyectos 
                    de alta complejidad para centrales hidroeléctricas, térmicas y redes de distribución.
                </p>

                <div className="about-page__team__container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="about-page__team__container--item">
                            <Image 
                                className="about-page__team__container--item--image"
                                src={member.image}
                                width={200}
                                height={200}
                                alt={member.name}
                            />
                            <h3 className="about-page__team__container--item--name">
                                {member.name}
                            </h3>
                            <p className="about-page__team__container--item--role">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer/>
        </main>
    );
}
