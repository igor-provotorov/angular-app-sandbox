import { Actor } from "./actor.model";

export interface MovieWithCheckboxValue {
    checkboxValue: boolean;
    id: number;
    title: string;
    credits: Actor[];
    overview: string;
    posterPath: string;
    releaseDate: string;
    videos: string;
}
