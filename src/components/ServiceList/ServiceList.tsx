import React from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/Shared/IconsSvg/ArrowIcon/ArrowIcon';
import ServiceIcon from '@/components/Shared/IconsSvg/ServiceIcon/ServiceIcon';
import { ServiceItemProps } from '@/interfaces/service/serviceCard.interface';
import { HomeServices } from '@/lib/servicesData/servicesData';
import './ServiceList.scss';

const ServiceItem = ({ service }: { service: ServiceItemProps }) => (
    <Link 
        href={service.href}
        className="service-list__item"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <h3 className="service-list__title">
            {service.title}
            <span className="service-list__description">{service.description}</span>
        </h3>
        <div className="service-list__button">
            Explorar más
            <ArrowIcon color="#fff" rotation={180} />
        </div>
        <div className="service-list__icon">
            <ServiceIcon />
        </div>
    </Link>
);

export const ServiceList = () => {
    return (
        <div className="service-list">
            {HomeServices.map((service, index) => (
                <ServiceItem
                    key={`service-${index}`}
                    service={service}
                />
            ))}
        </div>
    );
};