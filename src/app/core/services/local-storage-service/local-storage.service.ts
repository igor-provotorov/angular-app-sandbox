import { Injectable } from "@angular/core";

import { MovieWithCheckboxValue } from "../search-films-service";

@Injectable()
export class LocalStorageService {
    /**
     * Set checked movie to local storage by the given key.
     */
    public setSavedState(payload: MovieWithCheckboxValue): void {
        const actions: Array<MovieWithCheckboxValue> = this.getSavedState("FILMS_TO_WATCH") || [];
        const newActions: Array<MovieWithCheckboxValue> = actions.concat(payload);
        localStorage.setItem("FILMS_TO_WATCH", JSON.stringify(newActions));
    }

    /**
     * Remove unchecked movie from local storage by the given key.
     */
    public removeFromState(payload: MovieWithCheckboxValue): void {
        const actions: Array<MovieWithCheckboxValue> = this.getSavedState("FILMS_TO_WATCH");
        const newActions: Array<MovieWithCheckboxValue> = actions.filter(
            (movie: MovieWithCheckboxValue) => movie.id !== payload.id
        );
        localStorage.setItem("FILMS_TO_WATCH", JSON.stringify(newActions));
    }

    /**
     * Get data from local storage by the given key.
     */
    public getSavedState(localStorageKey: string): Array<MovieWithCheckboxValue> {
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
