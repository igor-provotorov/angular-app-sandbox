import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";

import { State, selectFilmToWatchList, AddFilmToWatchList, RemoveFilmFromWatchList } from "../../store/index";
import { MovieWithCheckboxValue } from "../../index";

@Injectable()
export class FilmsToWatchStoreFacade {
    /**
     * Store injection.
     */
    private store: Store<State>;

    /**
     * Stream of films to watch array from store select.
     */
    public filmsToWatch$: Observable<Array<MovieWithCheckboxValue>>;

    constructor(store: Store<State>) {
        this.store = store;
        this.filmsToWatch$ = this.store.select(selectFilmToWatchList);
    }

    /**
     * Dispath AddFilmToWatchList action to store.
     */
    AddFilmToWatchList(movie: MovieWithCheckboxValue): void {
        this.store.dispatch(new AddFilmToWatchList(movie));
    }

    /**
     * Dispath RemoveFilmFromWatchList action to store.
     */
    RemoveFilmFromWatchList(movie: MovieWithCheckboxValue): void {
        this.store.dispatch(new RemoveFilmFromWatchList(movie));
    }
}
