import { BASE_SEARCH_URL, API_KEY } from "../constants/index";

/**
 * Returns search url for movie details.
 */
const getMovieDetailsUrl: (param: number) => string = (id: number): string => {
    return `${BASE_SEARCH_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`;
};

export { getMovieDetailsUrl };
