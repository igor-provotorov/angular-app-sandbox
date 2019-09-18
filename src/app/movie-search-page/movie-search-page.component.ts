import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SearchFilmsService } from "../core/services";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import { ModifiedResultMovie } from "../core/services/search-films-service/models/index";

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
     * Loading flag.
     */
    public isLoading: boolean = false;

    /**
     * Array of films from API.
     */
    public resultsFilms$: Observable<Array<ModifiedResultMovie>>;

    constructor(searchFilmsService: SearchFilmsService) {
        this.searchFilmsService = searchFilmsService;
    }

    /**
     *  Makes response to API and fetching mapped-data to resultsFilms$ Array.
     */
    public loadFilms(searchQuery: string): void {
        if (!searchQuery.trim()) {
            this.resultsFilms$ = of([{ title: "Type something for search" }]);
        } else {
            this.isLoading = true;
            this.resultsFilms$ = this.searchFilmsService.getFilmsFromApi(searchQuery).pipe(
                tap(() => {
                    this.isLoading = false;
                })
            );
        }
    }
}
