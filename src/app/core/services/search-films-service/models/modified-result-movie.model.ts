import { Actor } from "./actor.model";

export interface ModifiedResultMovie {
    id: number;
    title: string;
    credits: Array<Actor> | null;
    overview: string;
    posterPath: string | null;
    releaseDate: string;
    videos: string | null;
}
