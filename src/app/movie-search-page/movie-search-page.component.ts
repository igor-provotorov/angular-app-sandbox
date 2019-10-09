import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import {
    SearchFilmsService,
    NoSuchMovies,
    MovieWithCheckboxValue,
    checkEmptyResults,
    FilmsToWatchStoreFacade,
} from "../core/index";

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
     * FilmsToWatch Store Facade.
     */
    private filmsToWatchStoreFacade: FilmsToWatchStoreFacade;

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
    public resultsFilms$: Observable<Array<MovieWithCheckboxValue | NoSuchMovies>>;

    constructor(searchFilmsService: SearchFilmsService, filmsToWatchStoreFacade: FilmsToWatchStoreFacade) {
        this.searchFilmsService = searchFilmsService;
        this.filmsToWatchStoreFacade = filmsToWatchStoreFacade;
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
                tap((data: Array<MovieWithCheckboxValue | NoSuchMovies>) => {
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
            this.filmsToWatchStoreFacade.addFilmToWatchList(movie);
        } else {
            this.filmsToWatchStoreFacade.removeFilmFromWatchList(movie);
        }
    }
}
