import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { MovieWithCheckboxValue } from "../core/services/search-films-service/models/index";
import { State, selectFilmToWatchList } from "../core/store/index";

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
    public filmsToWach$: Observable<Array<MovieWithCheckboxValue>>;

    /**
     * Property for Angular material open-close panel.
     */
    public panelOpenState = false;

    constructor(store: Store<State>) {
        this.store = store;
    }

    /**
     * Get films from store to filmsToWach$ property when ther component will mount.
     */
    public ngOnInit(): void {
        this.filmsToWach$ = this.store.select(selectFilmToWatchList);
    }
}
