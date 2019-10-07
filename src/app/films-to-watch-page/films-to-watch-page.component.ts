import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { MovieWithCheckboxValue, State, selectFilmToWatchList } from "../core/index";

@Component({
    selector: "app-films-to-watch-page",
    templateUrl: "./films-to-watch-page.component.html",
    styleUrls: ["./films-to-watch-page.component.scss"],
})
export class FilmsToWatchPageComponent implements OnInit {
    /**
     * Store injection.
     */
    private store: Store<State>;

    /**
     * Observable films to watch from store.
     */
    public filmsToWatch$: Observable<Array<MovieWithCheckboxValue>>;

    /**
     * Property for Angular material open-close panel.
     */
    public panelOpenState = false;

    constructor(store: Store<State>) {
        this.store = store;
    }

    /**
     * Get films from store to filmsToWatch$ property when ther component will mount.
     */
    public ngOnInit(): void {
        this.filmsToWatch$ = this.store.select(selectFilmToWatchList);
    }
}
