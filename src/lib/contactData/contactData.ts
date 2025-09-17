import { ServiceOption } from "@/interfaces/contact/contact";

export const SERVICE_OPTIONS: ServiceOption[] = [
    { value: 'range1', label: '$500.000 a $1.000.000' },
    { value: 'range2', label: '$1.000.000 a $5.000.000' },
    { value: 'range3', label: 'Más de $5.000.000' },
];

export const CITIES_OPTIONS = [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Santa Marta", "Bucaramanga", "Cúcuta", "Pereira", "Manizales",
    "Armenia", "Ibagué", "Neiva", "Villavicencio"
].sort();