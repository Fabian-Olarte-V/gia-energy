interface ServiceCategory {
    title: string;
    description: string;
    backgroundImage: string;
}

interface ServiceCategories {
    [key: string]: ServiceCategory;
}

export const servicesCategoryData: ServiceCategories = {
    "energia-solar": {
        "title": "Soluciones Solares para Energía Sustentable",
        "description": "Ofrecemos sistemas solares diseñados para maximizar el ahorro energético y promover el uso de energía limpia en hogares y negocios.",
        "backgroundImage": "/assets/images/services/services_image.jpg"
    },
    "instalacion": {
        "title": "Instalación Segura de Sistemas Solares",
        "description": "Nuestro equipo instala paneles y sistemas solares siguiendo estándares de calidad y seguridad para un rendimiento óptimo y duradero.",
        "backgroundImage": "/assets/images/home/home_services_image.jpg"
    },
    "mantenimiento": {
        "title": "Mantenimiento Preventivo de Energía Solar",
        "description": "Brindamos mantenimiento preventivo y correctivo para garantizar la eficiencia y prolongar la vida útil de tus equipos solares.",
        "backgroundImage": "/assets/images/home/home_aboutus_image.jpg"
    },
    "todos": {
        "title": "Servicios Completos de Energía Renovable",
        "description": "Descubre nuestra oferta integral: diseño, instalación y mantenimiento de soluciones solares adaptadas a las necesidades de cada cliente.",
        "backgroundImage": "/assets/images/services/services_image.jpg"
    }
};