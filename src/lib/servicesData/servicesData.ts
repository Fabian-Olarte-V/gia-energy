import { Service, ServiceItemProps } from "@/interfaces/service/serviceCard.interface";

export const HomeServices: ServiceItemProps[] = [
    {
        href: "/servicios?tipo=energia-solar",
        title: "Energia Solar",
        description: "Ahorro e independencia",
        backgroundImage: "/images/services/eficiencia.jpg"
    },
    {
        href: "/servicios?tipo=eficiencia",
        title: "Eficiencia Energetica",
        description: "Consumo inteligente",
        backgroundImage: "/images/services/energiaSolar.jpg"
    },
    {
        href: "/servicios?tipo=almacenamiento",
        title: "Sistemas de Almacenamiento",
        description: "Energía siempre disponible ",
        backgroundImage: "/images/services/sistemaAlmacenamiento.jpg"
    }
];

export enum ServiceCardCategory {
  ALL = 'Todos',
  SOLAR_ENERGY = 'Energía Solar',
  INSTALLATION = 'Eficiencia',
  STORAGE = 'Almacenamiento',
}

export const ServicesData: Service[] = [
  {
    title: "On Grid (Ahorro)",
    description:
      "Ayudamos a hogares y empresas a optimizar el uso de la energía mediante sistemas solares conectados a la red. Reducimos costos operativos, mejoramos la eficiencia eléctrica y garantizamos un consumo sostenible y confiable a largo plazo.",
    benefits: [
      "Reducción inmediata en la factura de energía",
      "Acceso constante a electricidad gracias a la red pública",
      "Bajo costo inicial al no requerir baterías",
    ],
    whatWeDo:
      "Diseñamos e instalamos sistemas solares conectados a la red que permiten cubrir parte de tu consumo diario y reducir tus gastos energéticos de manera sostenible.",
    commonApplications:
      "Hogares y empresas en zonas urbanas con conexión estable a la red eléctrica.",
    category: ServiceCardCategory.SOLAR_ENERGY,
    backgroundImage: "/images/services/onGrid.jpg",
  },
  {
    title: "Off Grid (Autónomos)",
    description:
      "Instalamos sistemas solares con baterías inteligentes que almacenan la energía generada durante el día para garantizar suministro continuo y confiable. Reducimos la dependencia de la red eléctrica y aseguramos la estabilidad energética en todo momento.",
    benefits: [
      "Autonomía energética total",
      "Energía disponible incluso en cortes de red",
      "Ideal para lugares sin acceso a la red pública",
    ],
    whatWeDo:
      "Instalamos sistemas solares con baterías de almacenamiento que garantizan el suministro continuo de electricidad y priorizan cargas críticas según la necesidad del usuario.",
    commonApplications:
      "Fincas, zonas rurales, sistemas aislados y proyectos que requieren independencia energética.",
    category: ServiceCardCategory.SOLAR_ENERGY,
    backgroundImage: "/images/services/offGrid.jpg",
  },
  {
    title: "Estudios de Eficiencia Energética",
    description:
      "Realizamos diagnósticos detallados para identificar oportunidades de ahorro en tus instalaciones. Analizamos consumos, equipos y hábitos energéticos para optimizar el uso de la electricidad y lograr un rendimiento más eficiente y sostenible.",
    benefits: [
      "Reducción de costos en la factura de energía",
      "Identificación de consumos innecesarios",
      "Optimización de procesos y equipos",
    ],
    whatWeDo:
      "Realizamos diagnósticos energéticos para identificar puntos de mejora en el uso de la electricidad, proponiendo soluciones que reduzcan el consumo sin afectar la operación de la empresa.",
    commonApplications:
      "Fábricas, oficinas, centros comerciales y empresas con alto consumo eléctrico.",
    category: ServiceCardCategory.INSTALLATION,
    backgroundImage: "/images/services/eficienciaEnergetica.jpg",
  },
  {
    title: "Calidad de Potencia",
    description:
      "Evaluamos la estabilidad y pureza de la energía que alimenta tus sistemas eléctricos. Detectamos variaciones, armónicos y fallas que puedan afectar tus equipos, implementando soluciones que aseguran un suministro limpio, constante y seguro.",
    benefits: [
      "Disminución de fallas en equipos sensibles",
      "Estabilidad y confiabilidad en la operación",
      "Prolongación de la vida útil de los sistemas eléctricos",
    ],
    whatWeDo:
      "Medimos y analizamos la calidad de la energía suministrada, detectando variaciones, armónicos o problemas de voltaje, e implementamos soluciones para garantizar energía limpia y estable.",
    commonApplications:
      "Industrias con maquinaria de precisión, hospitales, centros de datos y sistemas eléctricos críticos.",
    category: ServiceCardCategory.INSTALLATION,
    backgroundImage: "/images/services/calidadDePotencia.jpg",
  },
  {
    title: "Sistemas de Almacenamiento de Energía (BESS)",
    description:
      "Diseñamos soluciones de almacenamiento solar con baterías de última generación que acumulan la energía excedente y la liberan cuando más la necesitas. Garantizamos autonomía, reducción de costos en horas pico y continuidad operativa incluso durante cortes eléctricos.",
    benefits: [
      "Energía disponible incluso durante cortes eléctricos",
      "Mayor independencia de la red pública",
      "Optimización del uso de energía solar generada",
      "Reducción de costos en horas de mayor demanda",
    ],
    whatWeDo:
      "Instalamos sistemas de almacenamiento solar que acumulan energía y la liberan cuando es necesario, brindando autonomía y eficiencia energética.",
    commonApplications:
      "Hogares y empresas con cortes frecuentes o alta demanda energética, proyectos que requieren autonomía solar.",
    category: ServiceCardCategory.STORAGE,
    backgroundImage: "/images/services/baterias.jpg",
  }
];
