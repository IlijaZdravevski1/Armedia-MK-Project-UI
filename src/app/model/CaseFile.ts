import { Person } from "./Person";

export interface CaseFile {
    id?: number;
    caseNumber?: number;
    title?: string;
    incidentDate?: string;
    personId?: number;
    person?: Person;
}