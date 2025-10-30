import { ServiceOption } from "@/interfaces/contact/contact";

export const SERVICE_OPTIONS: ServiceOption[] = [
    { value: '$500.000 a $1.000.000', label: '$500.000 a $1.000.000' },
    { value: '$1.000.000 a $5.000.000', label: '$1.000.000 a $5.000.000' },
    { value: 'Más de $5.000.000', label: 'Más de $5.000.000' },
];

export const CITIES_OPTIONS = [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Santa Marta", "Bucaramanga", "Cúcuta", "Pereira", "Manizales",
    "Armenia", "Ibagué", "Neiva", "Villavicencio"
].sort();