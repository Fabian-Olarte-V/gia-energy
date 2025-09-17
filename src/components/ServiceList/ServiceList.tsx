import React from 'react';
import Link from 'next/link';
import ArrowIcon from '@/components/Shared/IconsSvg/ArrowIcon/ArrowIcon';
import ServiceIcon from '@/components/Shared/IconsSvg/ServiceIcon/ServiceIcon';
import { ServiceItemProps, ServiceListProps } from '@/interfaces/service/serviceCard.interface';
import { HomeServices } from '@/lib/servicesData/servicesData';
import './ServiceList.scss';


const ServiceItem = ({ href, title, description, backgroundImage }: ServiceItemProps & { backgroundImage: string }) => (
    <Link 
        href={href}
        className="service-list__item"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <h3 className="service-list__title">
            {title}
            <span className="service-list__description">{description}</span>
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

export const ServiceList = ({ backgroundImage }: ServiceListProps) => {
    return (
        <div className="service-list">
            {HomeServices.map((service, index) => (
                <ServiceItem
                    key={`service-${index}`}
                    {...service}
                    backgroundImage={backgroundImage}
                />
            ))}
        </div>
    );
};