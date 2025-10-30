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
        "title": "Convierte tu factura en ahorro e independencia",
        "description": "Diseñamos e instalamos sistemas solares personalizados que reducen tus costos de energía y te brindan independencia eléctrica en tu hogar o empresa.",
        "backgroundImage": "/images/services/eficiencia.jpg"
    },
    "eficiencia": {
        "title": "Optimiza tu consumo con energía inteligente",
        "description": "Optimizamos el consumo eléctrico de tu empresa mediante soluciones eficientes que reducen costos y promueven un uso más sostenible de la energía.",
        "backgroundImage": "/images/services/energiaSolar.jpg"
    },
    "almacenamiento": {
        "title": "Asegura tu suministro con sistemas de energía solar",
        "description": "Implementamos y mantenemos sistemas de almacenamiento solar que aseguran energía continua y extienden la vida útil de tus equipos.",
        "backgroundImage": "/images/services/sistemaAlmacenamiento.jpg"
    },
    "todos": {
        "title": "Descubre todas nuestras soluciones solares integradas",
        "description": "Explora todos nuestros servicios solares: instalación, eficiencia energética y almacenamiento, diseñados para ayudarte a ahorrar y cuidar el planeta.",
        "backgroundImage": "images/services/servicesImage.jpg"
    }
};