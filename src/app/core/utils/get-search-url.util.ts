import { BASE_SEARCH_URL, API_KEY } from "../constants";

/**
 * Returns search url for search movies.
 */
const getSearchUrl: (param1: string, param2: number) => string = (searchValue: string, page: number): string => {
    return `${BASE_SEARCH_URL}search/movie?api_key=${API_KEY}&query=${searchValue}&page=${page}`;
};

export { getSearchUrl };
