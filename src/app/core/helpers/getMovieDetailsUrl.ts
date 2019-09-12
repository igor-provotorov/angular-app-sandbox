import { BASE_SEARCH_URL, API_KEY } from "../constants";

/**
 * Returns search url for movie details.
 */
const getMovieDetailsUrl: (param: string) => string = (id: string): string => {
    return `${BASE_SEARCH_URL}/${API_KEY}${id}?api_key=${API_KEY}`;
};

export { getMovieDetailsUrl };
