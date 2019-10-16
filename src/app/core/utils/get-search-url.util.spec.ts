import { getSearchUrl } from "./get-search-url.util";
import { BASE_SEARCH_URL, API_KEY } from "../constants/index";

describe("getSearchUrl", () => {
    it("should return url for search movies from API with query and page params", () => {
        expect(getSearchUrl("test-string", 5)).toEqual(
            `${BASE_SEARCH_URL}search/movie?api_key=${API_KEY}&query=test-string&page=5`
        );
    });
});
