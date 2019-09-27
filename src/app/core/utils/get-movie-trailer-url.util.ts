import { BASE_YOUTUBE_VIDEOS_URL } from "../constants/index";

/**
 * Returns search url for movie trailer.
 */
const getMovieTrailerUrl: (param: string) => string = (key: string): string => {
    return `${BASE_YOUTUBE_VIDEOS_URL}${key}`;
};

export { getMovieTrailerUrl };
