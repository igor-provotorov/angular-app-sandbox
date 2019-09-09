import { BASE_SEARCH_URL, API_KEY, PER_PAGE } from "../constants";

/**
 * Returns search url for search movies
 */
const getSearchUrl = (searchValue: string): string => {
    return `${BASE_SEARCH_URL}?api_key=${API_KEY}&query=${searchValue}&per_page=${PER_PAGE}`;
};

export { getSearchUrl };
