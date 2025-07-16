'use client';
import React, { useState } from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { Service } from "@/interfaces/service/serviceCard.interface";
import { ServiceCardCategory } from "@/lib/servicesData/servicesData";
import "./ServicesSection.scss";

export default function ServicesSection({ initialData }: { initialData: Service[] }) {
    const categories = ServiceCardCategory;
    const [filteredServices, setFilteredServices] = useState(initialData); 
    const [activeCategory, setActiveCategory] = useState<string>(categories.ALL); 

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category); 
        if (category === categories.ALL) {
            setFilteredServices(initialData); 
        } else {
            setFilteredServices(initialData.filter((service) => service.category === category));
        }
    };

    return (
        <div className="all-services-section">
            <div className="all-services-section__categories-container">
                <ul className="all-services-section__categories">
                    {Object.values(categories).map((category) => (
                        <li
                            className="all-services-section__category"
                            key={category}
                            onClick={() => handleCategoryClick(category)} 
                        >
                            <p className={`all-services-section__category-name ${activeCategory === category ? 
                                "all-services-section__category-name--active" : ""}`}
                            >
                                {category}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="all-services-section__list">
                {filteredServices.map((service, index) => (
                    <div
                        key={index}
                        className={`all-services-section__list-item`}
                    >
                        <ServiceCard data={service} />
                    </div>
                ))}
            </div>
        </div>
    );
}