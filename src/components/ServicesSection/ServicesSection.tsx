'use client';
import React from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { Service } from "@/interfaces/service/serviceCard.interface";
import "./ServicesSection.scss";

export default function ServicesSection({ initialData }: { initialData: Service[] }) {

    return (
        <div className="all-services-section">
            <div className="all-services-section__list">
                {initialData.map((service, index) => (
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