import { Service } from "@/interfaces/service/serviceCard.interface";

export enum ServiceCardCategory {
  ALL = 'Todos',
  DIAGNOSTICO = 'Diagnóstico',
  RECUPERACION = 'Recuperación',
  OPTIMIZACION = 'Optimización',
}


export const ServicesData: Service[] = [
  {
    title: "Recuperación de Generadores de Alta Tensión",
    description: "Reconstrucción de bobinados y aislamiento para extender la vida útil en más del 150%.",
    benefits: [
      "Reducción de tiempos de parada",
      "Eliminación de focos de falla",
      "Mejora en la eficiencia operativa"
    ],
    whatWeDo: "Digitalizamos procesos críticos mediante automatización y análisis predictivo con redes neuronales.",
    commonApplications: "Centrales de generación, subestaciones automatizadas y sistemas con alta carga operativa",
    category: ServiceCardCategory.RECUPERACION,
    backgroundImage: "/assets/images/service-1.png",
  },
  {
    title: "Consultoría en recuperación de generadores tras eventos críticos",
    description: "Diagnóstico, análisis y acompañamiento técnico en la recuperación de generadores afectados por eventos como inundaciones o fallas severas.",
    benefits: [
      "Recuperación efectiva de activos críticos",
      "Minimización del impacto económico",
      "Prolongación de la vida útil de equipos afectados"
    ],
    whatWeDo: "Evaluamos condiciones de bobinas, núcleo y rotor, aplicamos pruebas de tensión y diagnóstico de descargas parciales.",
    commonApplications: "Centrales hidroeléctricas afectadas por eventos extremos",
    category: ServiceCardCategory.RECUPERACION,
    backgroundImage: "/assets/images/service-5.png",
  },
  {
    title: "Detección y análisis de descargas parciales con tensión aplicada en recinto oscuro",
    description: "Inspección especializada para identificar y analizar fallas eléctricas incipientes en generadores.",
    benefits: [
      "Ubicación precisa de descargas",
      "Prevención de fallas mayores",
      "Extensión de vida útil de los equipos"
    ],
    whatWeDo: "Aplicamos tensión controlada en un entorno oscuro con equipos propios para observar fenómenos de corona y evaluar el aislamiento.",
    commonApplications: "Generadores en operación o en mantenimiento preventivo, especialmente en plantas hidroeléctricas o térmicas",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-2.png",
  },
  {
    title: "Pruebas eléctricas especializadas a generadores",
    description: "Evaluación técnica profunda del estado eléctrico de generadores mediante pruebas de aislamiento, tensión aplicada y descarga parcial.",
    benefits: [
      "Verificación del estado real del generador",
      "Soporte para decisiones de puesta en marcha o retiro",
      "Detección de problemas ocultos"
    ],
    whatWeDo: "Ejecutamos pruebas eléctricas en generadores como vacío, cortocircuito, tensión aplicada y descarga parcial.",
    commonApplications: "Generadores nuevos, en reparación o previo a su puesta en operación",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-5.png",
  },
  {
    title: "Inspección visual y con fibroendoscopio para detección de descargas parciales",
    description: "Inspección interna detallada para localizar daños y planificar acciones correctivas.",
    benefits: [
      "Alerta temprana de descargas parciales",
      "Evita fallas durante el periodo de garantía",
      "Define acciones de mantenimiento específicas"
    ],
    whatWeDo: "Realizamos inspección visual interna usando fibroendoscopio, evaluando puntos críticos del generador.",
    commonApplications: "Generadores en garantía, equipos en revisión mayor o con historial de fallas",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Detección de descargas parciales con pruebas de ozono",
    description: "Medición de concentración de ozono como indicador indirecto de actividad de descargas parciales internas.",
    benefits: [
      "Detección temprana de defectos de aislamiento",
      "Identificación de riesgo sin necesidad de intervención directa",
      "Soporte para decisiones de mantenimiento predictivo"
    ],
    whatWeDo: "Realizamos pruebas en línea midiendo concentraciones de ozono en el recinto del generador para identificar deterioro del aislamiento.",
    commonApplications: "Plantas térmicas en operación, generadores encapsulados o de difícil acceso",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-3.png",
  },
  {
    title: "Análisis de causa raíz (ACR) en fallas de bobinados",
    description: "Investigación técnica para identificar el origen y mecanismos de falla en estatores o bobinados.",
    benefits: [
      "Evita reincidencia de fallas",
      "Permite acciones correctivas adecuadas",
      "Justifica garantías o rediseños"
    ],
    whatWeDo: "Analizamos materiales, condiciones operativas y métodos de reparación aplicados para determinar la causa raíz.",
    commonApplications: "Equipos con fallas repetitivas o defectos constructivos",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-6.png",
  },
  {
    title: "Soporte especializado en especificaciones técnicas para licitaciones",
    description: "Acompañamiento técnico en la elaboración, revisión y corrección de pliegos para adquisición o mantenimiento de generadores.",
    benefits: [
      "Reducción de errores contractuales",
      "Optimización de los requerimientos técnicos",
      "Mayor transparencia y eficiencia en el proceso de contratación"
    ],
    whatWeDo: "Asesoramos en la creación de pliegos técnicos para proyectos de modernización, adquisición de bobinados y rehabilitación de generadores.",
    commonApplications: "Empresas generadoras públicas o privadas en procesos de licitación",
    category: ServiceCardCategory.OPTIMIZACION,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Supervisión técnica e interventoría especializada",
    description: "Acompañamiento técnico en proyectos de rehabilitación o mantenimiento mayor, asegurando cumplimiento técnico y normativo.",
    benefits: [
      "Control de calidad en procesos",
      "Reducción de errores de ejecución",
      "Cumplimiento de estándares y normativas"
    ],
    whatWeDo: "Supervisamos montaje, desmontaje, pruebas y procesos críticos durante intervenciones en generadores.",
    commonApplications: "Proyectos de rehabilitación de plantas eléctricas",
    category: ServiceCardCategory.OPTIMIZACION,
    backgroundImage: "/assets/images/service-6.png",
  },
  {
    title: "Modernización de sistemas de distribución y transmisión",
    description: "Diseño y ejecución de mejoras en redes eléctricas, incluyendo sistemas antifraude y actualización de infraestructuras obsoletas.",
    benefits: [
      "Reducción de pérdidas técnicas",
      "Mejora de eficiencia y confiabilidad",
      "Cumplimiento de normas actuales"
    ],
    whatWeDo: "Rediseñamos y actualizamos redes en baja y media tensión, incluyendo sistemas de medición y control.",
    commonApplications: "Empresas de distribución y sistemas urbanos o rurales",
    category: ServiceCardCategory.OPTIMIZACION,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Innovación y eficiencia energética",
    description: "Implementación de soluciones sostenibles mediante energías limpias, automatización y sustitución de procesos ineficientes.",
    benefits: [
      "Reducción del consumo energético",
      "Mayor rentabilidad operativa",
      "Menor impacto ambiental"
    ],
    whatWeDo: "Evaluamos y diseñamos sistemas energéticos alternativos y automatizados con alto retorno de inversión.",
    commonApplications: "Industrias, centrales eléctricas, nuevos desarrollos de generación",
    category: ServiceCardCategory.OPTIMIZACION,
    backgroundImage: "/assets/images/service-5.png",
  },
];
