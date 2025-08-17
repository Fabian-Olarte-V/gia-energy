import { Service } from "@/interfaces/service/serviceCard.interface";

export enum ServiceCardCategory {
  ALL = 'Todos',
  DIAGNOSTICO = 'Diagnóstico',
  RECUPERACION = 'Recuperación',
  OPTIMIZACION = 'Optimización',
}


export const ServicesData: Service[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.",
    benefits: [
      "Reducción de tiempos de parada",
      "Eliminación de focos de falla",
      "Mejora en la eficiencia operativa"
    ],
    whatWeDo: "Digitalizamos procesos críticos mediante automatización y análisis predictivo con redes neuronales.",
    commonApplications: "Centrales de generación, subestaciones automatizadas y sistemas con alta carga operativa",
    category: ServiceCardCategory.RECUPERACION,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.",
    benefits: [
      "Recuperación efectiva de activos críticos",
      "Minimización del impacto económico",
      "Prolongación de la vida útil de equipos afectados"
    ],
    whatWeDo: "Evaluamos condiciones de bobinas, núcleo y rotor, aplicamos pruebas de tensión y diagnóstico de descargas parciales.",
    commonApplications: "Centrales hidroeléctricas afectadas por eventos extremos",
    category: ServiceCardCategory.RECUPERACION,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.",
    benefits: [
      "Ubicación precisa de descargas",
      "Prevención de fallas mayores",
      "Extensión de vida útil de los equipos"
    ],
    whatWeDo: "Aplicamos tensión controlada en un entorno oscuro con equipos propios para observar fenómenos de corona y evaluar el aislamiento.",
    commonApplications: "Generadores en operación o en mantenimiento preventivo, especialmente en plantas hidroeléctricas o térmicas",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.",
    benefits: [
      "Verificación del estado real del generador",
      "Soporte para decisiones de puesta en marcha o retiro",
      "Detección de problemas ocultos"
    ],
    whatWeDo: "Ejecutamos pruebas eléctricas en generadores como vacío, cortocircuito, tensión aplicada y descarga parcial.",
    commonApplications: "Generadores nuevos, en reparación o previo a su puesta en operación",
    category: ServiceCardCategory.DIAGNOSTICO,
    backgroundImage: "/assets/images/service-4.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies libero ac aliquet pulvinar.",
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


];
