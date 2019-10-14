import { Injectable } from "@angular/core";

import { FILMS_TO_WATCH_KEY } from "../../constants/index";
import { MovieWithCheckboxValue } from "../search-films-service/index";

@Injectable()
export class LocalStorageService {
    /**
     * Set checked movie to local storage by the given key.
     */
    public setSavedState(payload: MovieWithCheckboxValue): void {
        const actions: Array<MovieWithCheckboxValue> = this.getSavedState(FILMS_TO_WATCH_KEY) || [];
        const newActions: Array<MovieWithCheckboxValue> = actions.concat(payload);
        localStorage.setItem(FILMS_TO_WATCH_KEY, JSON.stringify(newActions));
    }

    /**
     * Remove unchecked movie from local storage by the given key.
     */
    public removeFromState(payload: MovieWithCheckboxValue): void {
        const actions: Array<MovieWithCheckboxValue> = this.getSavedState(FILMS_TO_WATCH_KEY);
        const newActions: Array<MovieWithCheckboxValue> = actions.filter(
            (movie: MovieWithCheckboxValue) => movie.id !== payload.id
        );
        localStorage.setItem(FILMS_TO_WATCH_KEY, JSON.stringify(newActions));
    }

    /**
     * Get data from local storage by the given key.
     */
    public getSavedState(localStorageKey: string): Array<MovieWithCheckboxValue> {
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
