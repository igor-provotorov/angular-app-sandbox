import { Injectable } from "@angular/core";

import { FILMS_TO_WATCH_KEY } from "../../constants/index";
import { MovieWithCheckboxValue } from "../../services/index";

@Injectable()
export class LocalStorageService {
    /**
     * Set checked movie to local storage by the given key.
     */
    public setSavedState(payload: MovieWithCheckboxValue): void {
        const filmsInStorage: Array<MovieWithCheckboxValue> = this.getSavedState(FILMS_TO_WATCH_KEY) || [];
        const updatedFilmsInStorage: Array<MovieWithCheckboxValue> = filmsInStorage.concat(payload);
        localStorage.setItem(FILMS_TO_WATCH_KEY, JSON.stringify(updatedFilmsInStorage));
    }

    /**
     * Remove unchecked movie from local storage by the given key.
     */
    public removeFromState(payload: MovieWithCheckboxValue): void {
        const filmsInStorage: Array<MovieWithCheckboxValue> = this.getSavedState(FILMS_TO_WATCH_KEY);
        const updatedFilmsInStorage: Array<MovieWithCheckboxValue> = filmsInStorage.filter(
            (movie: MovieWithCheckboxValue) => movie.id !== payload.id
        );
        localStorage.setItem(FILMS_TO_WATCH_KEY, JSON.stringify(updatedFilmsInStorage));
    }

    /**
     * Get data from local storage by the given key.
     */
    public getSavedState(localStorageKey: string): Array<MovieWithCheckboxValue> {
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
