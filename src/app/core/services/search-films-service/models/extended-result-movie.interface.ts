import { Genres, Credits, Videos, ProductionCompanies, ProductionCountries } from "./index";

export interface ExtendedResultMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: number;
    budget: number;
    credits: Credits;
    genres: Array<Genres>;
    homepage: number;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<ProductionCompanies>;
    production_countries: Array<ProductionCountries>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<any>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: Videos;
    vote_average: number;
    vote_count: number;
}
