import { Actor } from "./index";

export interface ModifiedResultMovie {
    title: string;
    credits?: Array<Actor> | null;
    overview?: string;
    posterPath?: string | null;
    releaseDate?: string;
    videos?: string | null;
}
