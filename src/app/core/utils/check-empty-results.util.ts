import { NO_SUCH_MOVIES, ERROR } from "../constants/index";
import { ModifiedResultMovie } from "../services/search-films-service/models/index";

/**
 * Check if results is empty or response is .
 */
const checkEmptyResults: (param: Array<ModifiedResultMovie>) => boolean = (
    data: Array<ModifiedResultMovie>
): boolean => {
    const res: boolean = data[0].title !== NO_SUCH_MOVIES && data[0].title.slice(0, 7) !== ERROR;

    return res;
};

export { checkEmptyResults };
