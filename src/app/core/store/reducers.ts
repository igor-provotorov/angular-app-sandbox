import { ActionReducerMap } from "@ngrx/store";

import { filmsToWatchReducer, FilmsToWatchState } from "./films-to-watch/index";

/**
 * FilmsToWatch interface.
 */
export interface State {
    filmsToWatch: FilmsToWatchState;
}

/**
 * Reducers Map.
 */
export const reducers: ActionReducerMap<State> = {
    filmsToWatch: filmsToWatchReducer,
};
