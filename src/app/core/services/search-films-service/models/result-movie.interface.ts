export interface ResultMovie {
    popularity: number;
    id: number;
    video: boolean;
    vote_count: number;
    vote_average: number;
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
}
