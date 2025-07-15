'use client';
import React, { useState } from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import "./ServicesSection.scss";
import { IServiceCard } from "@/interfaces/serviceCard/serviceCard.interface";
import { serviceCategories } from "@/lib/initialData/initialData";

export default function ServicesSection({ initialData }: { initialData: IServiceCard[] }) {
    const categories = serviceCategories;
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
                        className={`all-services-section__list-item ${
                                    service.expanded ? "all-services-section__list-item--expanded" : ""}`}
                    >
                        <ServiceCard data={service} />
                    </div>
                ))}
            </div>
        </div>
    );
}