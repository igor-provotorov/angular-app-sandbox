import { Injectable } from "@angular/core";

import { FilmsToWatchState } from "../../store/index";

@Injectable()
export class LocalStorageService {
    /**
     * Set data to local storage by the given key.
     */
    public setSavedState(localStorageKey: string, state: FilmsToWatchState): void {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }

    /**
     * Get data from local storage by the given key.
     */
    public getSavedState(localStorageKey: string): FilmsToWatchState {
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
