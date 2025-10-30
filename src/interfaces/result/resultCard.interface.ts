import { IStatItem } from "../statsBadge/statsBadge";

export interface ISimpleResultCardProps {
    title: string; 
    backgroundImage: string; 
    category: string;
    site: string;
}

export interface IExpandedResultCardProps {
    backgroundImage: string;
    title: string;
    description: string;
    stats: IStatItem[];
}

export interface Result {
    title: string; 
    outcomeHighlights: string[];
    backgroundImage: string;
    category: string;
    site: string;
}