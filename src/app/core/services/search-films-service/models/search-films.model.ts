import { ResultMovie } from "./result-movie.model";

export interface SearchFilms {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<ResultMovie>;
}
