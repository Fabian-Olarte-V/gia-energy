import { ServiceCardCategory } from "@/lib/servicesData/servicesData";

export interface Service {
    title: string;
    description: string;
    benefits: string[];
    whatWeDo: string;
    commonApplications: string;
    category: ServiceCardCategory;
    backgroundImage: string;
    black?: boolean; 
}

export interface ServiceItemProps {
    href: string;
    title: string;
    description: string;
    backgroundImage?: string;
}

export interface ServiceListProps {
    backgroundImage: string;
}

export interface ServicesSectionProps {
    initialData: Service[];
    categoryType: string;
}
