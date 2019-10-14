import { FilmsToWatchActionTypes, FilmsToWatchActions } from "./films-to-watch.action";
import { FilmsToWatchState } from "./films-to-watch-state.model";
import { MovieWithCheckboxValue } from "../../services/index";

/**
 * Initial state for reducer.
 */
export const initialState: FilmsToWatchState = {
    filmsToWatch: [],
};

/**
 * Reducer function that reduce films to watch actions.
 */
export const filmsToWatchReducer: (state: FilmsToWatchState, action: FilmsToWatchActions) => FilmsToWatchState = (
    state: FilmsToWatchState = initialState,
    action: FilmsToWatchActions
): FilmsToWatchState => {
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
                    (movie: MovieWithCheckboxValue) => movie.id !== action.payload.id
                ),
            };
        }
        default: {
            return state;
        }
    }
};
