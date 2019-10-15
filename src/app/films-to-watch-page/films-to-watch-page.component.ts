import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { MovieWithCheckboxValue, FilmsToWatchStoreFacade } from "../core/index";

@Component({
    selector: "app-films-to-watch-page",
    templateUrl: "./films-to-watch-page.component.html",
    styleUrls: ["./films-to-watch-page.component.scss"],
})
export class FilmsToWatchPageComponent implements OnInit {
    /**
     * FilmsToWatchStoreFacade injection.
     */
    private filmsToWatchStoreFacade: FilmsToWatchStoreFacade;

    /**
     * Observable films to watch from store.
     */
    public filmsToWatch$: Observable<Array<MovieWithCheckboxValue>>;

    /**
     * Property for Angular material open-close panel.
     */
    public panelOpenState = false;

    constructor(filmsToWatchStoreFacade: FilmsToWatchStoreFacade) {
        this.filmsToWatchStoreFacade = filmsToWatchStoreFacade;
    }

    /**
     * Get films from store to filmsToWatch$ property when ther component will mount.
     */
    public ngOnInit(): void {
        this.filmsToWatch$ = this.filmsToWatchStoreFacade.filmsToWatch$;
    }

    /**
     * Remove movie from Store, when the remove button was clicked.
     */
    public onRemoveButtonClick(movie: MovieWithCheckboxValue): void {
        this.filmsToWatchStoreFacade.removeFilmFromWatchList(movie);
    }
}
