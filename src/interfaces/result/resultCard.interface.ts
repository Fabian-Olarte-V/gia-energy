import { IStatItem } from "../stats/stast.interface";

export interface ISimpleResultCardProps {
    title: string; 
    description: string; 
    backgroundImage: string; 
}

export interface IExpandedResultCardProps {
    backgroundImage: string;
    title: string;
    description: string;
    stats: IStatItem[];
}

export interface Result {
    title: string; 
    description: string; 
    outcomeHighlights: string[];
    servicesInvolved: string[];
    backgroundImage: string;
}