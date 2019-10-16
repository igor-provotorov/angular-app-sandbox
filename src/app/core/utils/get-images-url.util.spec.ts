import { getImagesUrl } from "./get-images-url.util";
import {
    BASE_SEARCH_IMAGES_URL,
    POSTER_IMAGE_SIZE_PX,
    ACTOR_IMAGE_SIZE_PX,
    DEFAULT_IMAGE_SIZE_PX,
} from "../constants/index";

describe("getImagesUrl", () => {
    it("should return base search url with default image size if params are empty strings", () => {
        const result: string = getImagesUrl("", "");
        expect(result).toEqual(`${BASE_SEARCH_IMAGES_URL}${DEFAULT_IMAGE_SIZE_PX}`);
    });

    it("should return search url with default image size searchValue if whoParam is empty string", () => {
        const result: string = getImagesUrl("TESTING", "");
        expect(result).toEqual(`${BASE_SEARCH_IMAGES_URL}${DEFAULT_IMAGE_SIZE_PX}TESTING`);
    });

    it("should return search url with poster image size searchValue if whoParam is poster", () => {
        const result: string = getImagesUrl("TESTING", "poster");
        expect(result).toEqual(`${BASE_SEARCH_IMAGES_URL}${POSTER_IMAGE_SIZE_PX}TESTING`);
    });

    it("should return search url with actor image size searchValue if whoParam is actor", () => {
        const result: string = getImagesUrl("TESTING", "actor");
        expect(result).toEqual(`${BASE_SEARCH_IMAGES_URL}${ACTOR_IMAGE_SIZE_PX}TESTING`);
    });
});
