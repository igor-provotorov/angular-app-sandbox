import { checkEmptyResults } from "./check-empty-results.util";
import { NO_SUCH_MOVIES, ERROR } from "../constants/index";

describe("checkEmptyResults", () => {
    it("should return true if data title is empty string", () => {
        const result: boolean = checkEmptyResults([{ title: "" }]);
        expect(result).toBe(true);
    });

    it("should return false if data title equal 'NO_SUCH_MOVIES'", () => {
        const result: boolean = checkEmptyResults([{ title: NO_SUCH_MOVIES }]);
        expect(result).toBe(false);
    });

    it("should return false if data title contains 'ERROR'", () => {
        const result: boolean = checkEmptyResults([{ title: ERROR }]);
        expect(result).toBe(false);
    });

    it("should return true if data title is not 'NO_SUCH_MOVIES' string and dont't includes 'ERROR' string", () => {
        const result: boolean = checkEmptyResults([{ title: "YES_SUCH_MOVIE error" }]);
        expect(result).toBe(true);
    });
});
