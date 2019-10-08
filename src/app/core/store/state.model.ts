import { FilmsToWatchState } from "./films-to-watch/index";

/**
 * Main NgRx state interface.
 */
export interface State {
    filmsToWatch: FilmsToWatchState;
}
