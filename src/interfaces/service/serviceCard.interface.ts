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