import { NO_SUCH_MOVIES, ERROR } from "../constants/index";
import { ModifiedResultMovie, NoSuchMovies } from "../services/index";

/**
 * Check if results is empty or response is .
 */
export const checkEmptyResults: (param: Array<ModifiedResultMovie | NoSuchMovies>) => boolean = (
    data: Array<ModifiedResultMovie | NoSuchMovies>
): boolean => {
    const res: boolean = data[0].title !== NO_SUCH_MOVIES && !data[0].title.includes(ERROR);

    return res;
};
