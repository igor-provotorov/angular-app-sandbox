import { Component, OnDestroy } from "@angular/core";
import { SearchFilmsService } from "../core/services";
import { Subscription } from "rxjs";

@Component({
    selector: "app-movie-search-page",
    templateUrl: "./movie-search-page.component.html",
    styleUrls: ["./movie-search-page.component.scss"],
})
export class MovieSearchPageComponent implements OnDestroy {
    /** SearchFilmsService. */
    private searchFilmsService: SearchFilmsService;

    private subscriptions: Subscription[] = [];

    /** Loading flag. */
    public isLoading: boolean = false;

    /** Array of films from API. */
    public resultsFilms: Array<string> = [];

    constructor(searchFilmsService: SearchFilmsService) {
        this.searchFilmsService = searchFilmsService;
    }

    /** Makes response to API and fetching mapped-data to resultsFilms Array. */
    public loadFilms(searchQuery: string): void {
        this.isLoading = true;
        if (!searchQuery.trim()) {
            this.resultsFilms = ["Type something for search"];
            this.isLoading = false;
        } else {
            const sub: Subscription = this.searchFilmsService.getFilmsFromApi(searchQuery).subscribe(
                (response: Array<string>): void => {
                    if (!response.length) {
                        this.resultsFilms = ["There are no such films"];
                    } else {
                        this.resultsFilms = response;
                    }
                    this.isLoading = false;
                },
                (error: Error): void => {
                    console.log(error.message);
                }
            );
            this.subscriptions.push(sub);
        }
    }

    /** Unsubscribe from subcribers when the component will destroy. */
    public ngOnDestroy(): void {
        this.subscriptions.forEach((sub: Subscription) => {
            sub.unsubscribe();
        });
    }
}
