import { Actor } from "./index";

export interface ModifiedResultMovie {
    title: string;
    credits?: Array<Actor> | null;
    id?: number;
    overview?: string;
    poster_path?: string | null;
    release_date?: string;
    videos?: string | null;
}
