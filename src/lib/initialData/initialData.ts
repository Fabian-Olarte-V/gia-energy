import { IExpandedResultCardProps, ISimpleResultCardProps } from "@/interfaces/resultCard/resultCard.interface";
import { IServiceCard } from "@/interfaces/serviceCard/serviceCard.interface";
import { IStatItem } from "@/interfaces/stats/stast.interface";

export const serviceCategories = {
    ALL: "Todos",
    DIAGNOSTIC: "Diagnóstico",
    RECOVERY: "Recuperación",
    AUTOMATION: "Automatización",
    MODERNIZATION: "Modernización",
};

export const serviceCardsData: IServiceCard[] = [
    {
        title: "Recuperación de Generadores de Alta Tensión",
        category: serviceCategories.RECOVERY,
        description:
            "Reconstrucción de bobinados y aislamiento para extender la vida útil en más del 150%.",
        backgroundImage: "/assets/images/service-1.png",
    },
    {
        title: "Repotenciación de Centrales de Generación",
        category: serviceCategories.MODERNIZATION,
        description:
            "Mejoramos equipos antiguos para aumentar eficiencia sin reemplazos costosos.",
        backgroundImage: "/assets/images/service-5.png",
    },
    {
        title: "Automatización y Análisis de Fallas",
        category: serviceCategories.AUTOMATION,
        description: "Automatizamos procesos críticos y reducimos tiempos de parada.",
        backgroundImage: "/assets/images/service-6.png",
    },
    {
        title: "Evaluación de Riesgos Eléctricos",
        category: serviceCategories.DIAGNOSTIC,
        description: "Identificamos fallas críticas y aplicamos análisis RCA.",
        backgroundImage: "/assets/images/service-4.png",
        black:true
    },
];

export const simpleResultsItems: ISimpleResultCardProps[] = [
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Generadores de Alta Tensión',
        description: 'Reconstrucción de bobinados para extender la vida útil.',
    },
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Automatización de Sistemas',
        description: 'Optimización de procesos críticos con tecnología avanzada.',
    },
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Diagnóstico Eléctrico Avanzado',
        description: 'Análisis detallado para mejorar la eficiencia operativa.',
    },
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Evaluación de Riesgos',
        description: 'Identificación de fallas críticas y análisis de causa raíz.',
    },
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Repotenciación de Centrales',
        description: 'Mejoramos equipos antiguos para aumentar la eficiencia.',
    },
    {
        backgroundImage: '/assets/images/bottom-background.jpg',
        title: 'Soluciones Personalizadas',
        description: 'Diseño de estrategias específicas para tus necesidades.',
    },
];

export const statsData: IStatItem[] = [
    {
        label: "+150%",
        value: "Aumento de la vida útil de generadores tras recuperación de bobinados",
    },
    {
        label: "+40",
        value: "Años de experiencia combinada de nuestro equipo en ingeniería especializada y reparación eléctrica.",
    },
    {
        label: "-40%",
        value: "Reducción promedio de costos tras procesos de repotenciación.",
    },
    {
        label: "-70%",
        value: "Disminución de fallas tras procesos de automatización",
    },
];


export const expandedResultCardData: IExpandedResultCardProps[] = [
    {
        backgroundImage: '/assets/images/service-1.png',
        title: 'Recuperación de Generadores de Alta Tensión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum pellentesque purus. Etiam varius ex varius velit mattis aliquet. Nulla ac suscipit arcu. Suspendisse posuere massa sit amet lectus venenatis.',
        stats: [
            {
                value: '45%',
                label: 'En reducción en tiempos de parada',
            },
            {
                value: '38%',
                label: 'En aumento en eficiencia operativa',
            },
            {
                value: '150%',
                label: 'En aumento de vida útil extendida',
            },
            {
                value: '70%',
                label: 'Menos tiempo de respuesta ante eventos',
            },
        ],
    },
        {
        backgroundImage: '/assets/images/service-1.png',
        title: 'Recuperación de Generadores de Alta Tensión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum pellentesque purus. Etiam varius ex varius velit mattis aliquet. Nulla ac suscipit arcu. Suspendisse posuere massa sit amet lectus venenatis.',
        stats: [
            {
                value: '45%',
                label: 'En reducción en tiempos de parada',
            },
            {
                value: '38%',
                label: 'En aumento en eficiencia operativa',
            },
            {
                value: '150%',
                label: 'En aumento de vida útil extendida',
            },
            {
                value: '70%',
                label: 'Menos tiempo de respuesta ante eventos',
            },
        ],
    },
        {
        backgroundImage: '/assets/images/service-1.png',
        title: 'Recuperación de Generadores de Alta Tensión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum pellentesque purus. Etiam varius ex varius velit mattis aliquet. Nulla ac suscipit arcu. Suspendisse posuere massa sit amet lectus venenatis.',
        stats: [
            {
                value: '45%',
                label: 'En reducción en tiempos de parada',
            },
            {
                value: '38%',
                label: 'En aumento en eficiencia operativa',
            },
            {
                value: '150%',
                label: 'En aumento de vida útil extendida',
            },
            {
                value: '70%',
                label: 'Menos tiempo de respuesta ante eventos',
            },
        ],
    },
        {
        backgroundImage: '/assets/images/service-1.png',
        title: 'Recuperación de Generadores de Alta Tensión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum pellentesque purus. Etiam varius ex varius velit mattis aliquet. Nulla ac suscipit arcu. Suspendisse posuere massa sit amet lectus venenatis.',
        stats: [
            {
                value: '45%',
                label: 'En reducción en tiempos de parada',
            },
            {
                value: '38%',
                label: 'En aumento en eficiencia operativa',
            },
            {
                value: '150%',
                label: 'En aumento de vida útil extendida',
            },
            {
                value: '70%',
                label: 'Menos tiempo de respuesta ante eventos',
            },
        ],
    },
        {
        backgroundImage: '/assets/images/service-1.png',
        title: 'Recuperación de Generadores de Alta Tensión',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum pellentesque purus. Etiam varius ex varius velit mattis aliquet. Nulla ac suscipit arcu. Suspendisse posuere massa sit amet lectus venenatis.',
        stats: [
            {
                value: '45%',
                label: 'En reducción en tiempos de parada',
            },
            {
                value: '38%',
                label: 'En aumento en eficiencia operativa',
            },
            {
                value: '150%',
                label: 'En aumento de vida útil extendida',
            },
            {
                value: '70%',
                label: 'Menos tiempo de respuesta ante eventos',
            },
        ],
    }
]