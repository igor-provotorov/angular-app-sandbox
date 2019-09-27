import { NO_SUCH_MOVIES, ERROR } from "../constants/index";
import { ModifiedResultMovie, NoSuchMovies } from "../services/search-films-service/models/index";

/**
 * Check if results is empty or response is .
 */
const checkEmptyResults: (param: Array<ModifiedResultMovie | NoSuchMovies>) => boolean = (
    data: Array<ModifiedResultMovie | NoSuchMovies>
): boolean => {
    const res: boolean = data[0].title !== NO_SUCH_MOVIES && !data[0].title.includes(ERROR);

    return res;
};

export { checkEmptyResults };
