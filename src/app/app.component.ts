import { Component } from "@angular/core";

import { SearchFilmsService } from "./core/services";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
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
    public resultsFilms: Array<string> = [];

    constructor(searchFilmsService: SearchFilmsService) {
        this.searchFilmsService = searchFilmsService;
    }

    /**
     * Makes response to API and fetching mapped-data to resultsFilms Array.
     */
    public loadFilms(searchQuery: string): void {
        this.isLoading = true;
        if (!searchQuery.trim()) {
            this.resultsFilms = ["Type something for search"];
        } else {
            this.searchFilmsService.getFilmsFromApi(searchQuery).subscribe(
                (response: Array<string>): void => {
                    if (!response.length) {
                        this.resultsFilms = ["There are no such films"];
                    } else {
                        this.resultsFilms = response;
                    }
                },
                (error: Error): void => {
                    console.log(error.message);
                }
            );
        }
        this.isLoading = false;
    }
}
