import { getMovieDetailsUrl } from "./get-movie-details-url.util";
import { BASE_SEARCH_URL, API_KEY } from "../constants/index";

describe("getMovieDetailsUrl", () => {
    it("should return url for search details movies with id query parameter", () => {
        expect(getMovieDetailsUrl(5)).toEqual(
            `${BASE_SEARCH_URL}movie/5?api_key=${API_KEY}&append_to_response=videos,credits`
        );
    });
});
