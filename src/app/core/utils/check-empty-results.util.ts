import { NO_SUCH_MOVIES } from "../constants/index";
import { ModifiedResultMovie } from "../services/search-films-service/models/index";

/**
 * Check if results is empty.
 */
const checkEmptyResults: (param: Array<ModifiedResultMovie>) => boolean = (data: Array<ModifiedResultMovie>): boolean =>
    data[0].title !== NO_SUCH_MOVIES;

export { checkEmptyResults };
