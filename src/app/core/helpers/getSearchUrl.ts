import { BASE_SEARCH_URL, API_KEY } from "../constants";

/**
 * Returns search url for search movies
 */
const getSearchUrl = (searchValue: string): string => {
    return `${BASE_SEARCH_URL}?api_key=${API_KEY}&query=${searchValue}`;
};

export { getSearchUrl };
