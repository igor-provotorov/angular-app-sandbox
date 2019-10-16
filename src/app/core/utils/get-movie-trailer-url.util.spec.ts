import { getMovieTrailerUrl } from "./get-movie-trailer-url.util";
import { BASE_YOUTUBE_VIDEOS_URL } from "../constants/index";

describe("getMovieTrailerUrl", () => {
    it("should return url for search movie trailer with query param", () => {
        expect(getMovieTrailerUrl("test-string")).toEqual(`${BASE_YOUTUBE_VIDEOS_URL}test-string`);
    });
});
