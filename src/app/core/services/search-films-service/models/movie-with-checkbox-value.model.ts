import { Actor } from "./index";

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
