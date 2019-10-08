import { ActionReducerMap } from "@ngrx/store";

import { filmsToWatchReducer } from "./films-to-watch/index";
import { State } from "./state.model";

/**
 * Reducers Map.
 */
export const reducers: ActionReducerMap<State> = {
    filmsToWatch: filmsToWatchReducer,
};
