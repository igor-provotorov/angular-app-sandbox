import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import { Store } from "@ngrx/store";

import { SearchFilmsService } from "../core/services/index";
import {
    ModifiedResultMovie,
    NoSuchMovies,
    MovieWithCheckboxValue,
} from "../core/services/search-films-service/models/index";
import { checkEmptyResults } from "../core/utils/index";
import { State } from "../core/store/index";
import { AddFilmToWatchList, RemoveFilmFromWatchList } from "../core/store/index";

@Component({
    selector: "app-movie-search-page",
    templateUrl: "./movie-search-page.component.html",
    styleUrls: ["./movie-search-page.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchPageComponent {
    /**
     * SearchFilmsService.
     */
    private searchFilmsService: SearchFilmsService;

    /**
     * Store
     */
    private store: Store<State>;

    /**
     * Loading flag.
     */
    public isLoading: boolean = false;

    /**
     * Is no more results flag.
     */
    public isNoMoreResults: boolean = false;

    /**
     * If searching films exists flag.
     */
    public isSearchedFilms: boolean = false;

    /**
     * Array of films from API.
     */
    public resultsFilms$: Observable<Array<ModifiedResultMovie | NoSuchMovies>>;

    constructor(searchFilmsService: SearchFilmsService, store: Store<State>) {
        this.searchFilmsService = searchFilmsService;
        this.store = store;
    }

    /**
     *  Makes response to API and fetching mapped-data to resultsFilms$ Array.
     */
    public loadFilms(searchQuery: string): void {
        this.isSearchedFilms = false;
        this.isNoMoreResults = false;

        if (!searchQuery || !searchQuery.trim()) {
            this.resultsFilms$ = of([{ title: "Type something for search" }]);
        } else {
            this.isLoading = true;
            this.resultsFilms$ = this.searchFilmsService.getFilmsFromApi(searchQuery).pipe(
                tap((data: Array<ModifiedResultMovie | NoSuchMovies>) => {
                    this.isLoading = false;
                    this.isSearchedFilms = checkEmptyResults(data);
                })
            );
        }
    }

    /**
     * Emit fetching data from next page when user click "Load More" button.
     */
    public LoadMoreMovies(): void {
        this.isLoading = true;
        this.searchFilmsService.nextPage();
        this.isNoMoreResults = this.searchFilmsService.isNoMoreResults;
    }

    /**
     * Change isChecked property if checkbox was clicked.
     */
    public onCheckBoxClicked(movie: MovieWithCheckboxValue): void {
        if (movie.checkboxValue) {
            this.store.dispatch(new AddFilmToWatchList(movie));
        } else {
            this.store.dispatch(new RemoveFilmFromWatchList(movie));
        }
    }
}
