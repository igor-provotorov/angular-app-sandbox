import { BASE_SEARCH_IMAGES_URL, POSTER_IMAGE_SIZE_PX, ACTOR_IMAGE_SIZE_PX, DEFAULT_IMAGE_SIZE_PX } from "../constants";

/**
 * Returns images url for pictures in movies.
 */
export const getImagesUrl: (param: string, whoParam: string) => string = (searchValue: string, who: string): string => {
    switch (who) {
        case "poster":
            return `${BASE_SEARCH_IMAGES_URL}${POSTER_IMAGE_SIZE_PX}${searchValue}`;
        case "actor":
            return `${BASE_SEARCH_IMAGES_URL}${ACTOR_IMAGE_SIZE_PX}${searchValue}`;
        default:
            return `${BASE_SEARCH_IMAGES_URL}${DEFAULT_IMAGE_SIZE_PX}${searchValue}`;
    }
};
