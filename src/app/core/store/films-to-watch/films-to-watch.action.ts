import { Action } from "@ngrx/store";

import { MovieWithCheckboxValue } from "../../services/search-films-service/models";

/**
 * Types of films-to-watch actions.
 */
export enum FilmsToWatchActionTypes {
    ADD_FILM_TO_WATCH_LIST = "[Films-to-watch] ADD_FILM_TO_WATCH_LIST",
    REMOVE_FILM_FROM_WATCH_LIST = "[Films-to-watch] REMOVE_FILM_FROM_WATCH_LIST",
}

/**
 * ADD_FILM_TO_WATCH_LIST action class.
 */
export class AddFilmToWatchList implements Action {
    readonly type = FilmsToWatchActionTypes.ADD_FILM_TO_WATCH_LIST;

    constructor(public payload: MovieWithCheckboxValue) {}
}

/**
 * REMOVE_FILM_FROM_WATCH_LIST action class.
 */
export class RemoveFilmFromWatchList implements Action {
    readonly type = FilmsToWatchActionTypes.REMOVE_FILM_FROM_WATCH_LIST;

    constructor(public payload: MovieWithCheckboxValue) {}
}

/**
 * Combined films-to-watch actions.
 */
export type FilmsToWatchActions = AddFilmToWatchList | RemoveFilmFromWatchList;