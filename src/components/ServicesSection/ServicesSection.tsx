'use client';
import React from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { ServicesSectionProps } from "@/interfaces/service/serviceCard.interface";
import { normalizeCategory } from "@/utils/normalizeServiceCategory/normalizeServiceCategory";
import "./ServicesSection.scss";


export default function ServicesSection({ initialData, categoryType }: ServicesSectionProps) {
    const filteredServices = React.useMemo(() => 
        categoryType === 'todos' 
            ? initialData
            : initialData.filter(service => normalizeCategory(service.category) === categoryType),
        [initialData, categoryType]
    );

    return (
        <section className="all-services-section">
            <div className="all-services-section__grid">
                {filteredServices.map((service, index) => (
                    <div
                        key={`${service.title}-${service.category}-${index}`}
                        className="all-services-section__item"
                    >
                        <ServiceCard data={service} />
                    </div>
                ))}
            </div>
        </section>
    );
}