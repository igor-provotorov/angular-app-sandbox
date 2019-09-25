const BASE_SEARCH_URL: string = "https://api.themoviedb.org/3/";
const BASE_SEARCH_IMAGES_URL: string = "https://image.tmdb.org/t/p/w500";
const BASE_YOUTUBE_VIDEOS_URL: string = "https://www.youtube.com/watch?v=";
const API_KEY: string = "026c9d92e76619507fb31d8065f3304d";
const PAGE: number = 1;
const REQUEST_COUNT_IS_OVER_THE_ALLOWED_LIMIT: number = 429;
const NO_ACTOR_IMAGE_URL: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/400px-User-Pict-Profil.svg.png";
const NO_SUCH_MOVIES: string = "No such movies";
const ERROR: string = "#Error:";

export {
    BASE_SEARCH_URL,
    BASE_SEARCH_IMAGES_URL,
    BASE_YOUTUBE_VIDEOS_URL,
    API_KEY,
    PAGE,
    REQUEST_COUNT_IS_OVER_THE_ALLOWED_LIMIT,
    NO_ACTOR_IMAGE_URL,
    NO_SUCH_MOVIES,
    ERROR,
};
