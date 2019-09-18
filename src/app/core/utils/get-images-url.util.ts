import { BASE_SEARCH_IMAGES_URL } from "../constants";

/**
 * Returns images url for pictures in movies.
 */
const getImagesUrl: (param: string) => string = (searchValue: string): string => {
    return `${BASE_SEARCH_IMAGES_URL}${searchValue}`;
};

export { getImagesUrl };
