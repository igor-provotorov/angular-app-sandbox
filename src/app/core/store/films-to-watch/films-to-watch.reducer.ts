import { FilmsToWatchActionTypes, FilmsToWatchActions } from "./films-to-watch.action";
import { MovieWithCheckboxValue } from "../../services/search-films-service/models";

/**
 * Interface for filmsToWatch.
 */
export interface FilmsToWatchState {
    filmsToWatch: Array<MovieWithCheckboxValue>;
}

/**
 * Initial state for reducer.
 */
export const initialState: FilmsToWatchState = {
    filmsToWatch: [],
};

/**
 * Reducer function that reduce films to watch actions.
 */
export function filmsToWatchReducer(
    state: FilmsToWatchState = initialState,
    action: FilmsToWatchActions
): FilmsToWatchState {
    switch (action.type) {
        case FilmsToWatchActionTypes.ADD_FILM_TO_WATCH_LIST: {
            return {
                ...state,
                filmsToWatch: [...state.filmsToWatch, action.payload],
            };
        }
        case FilmsToWatchActionTypes.REMOVE_FILM_FROM_WATCH_LIST: {
            return {
                ...state,
                filmsToWatch: state.filmsToWatch.filter(
                    (item: MovieWithCheckboxValue) => item.id !== action.payload.id
                ),
            };
        }
        default: {
            return state;
        }
    }
}
