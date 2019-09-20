import { NO_SUCH_MOVIES } from "../constants/index";
import { ModifiedResultMovie } from "../services/search-films-service/models/index";

/**
 * Returns images url for pictures in movies.
 */
const checkEmptyResults = (data: Array<ModifiedResultMovie>) => {
    if (data[0].title === NO_SUCH_MOVIES) {
        return true;
    }
};

export { checkEmptyResults };
