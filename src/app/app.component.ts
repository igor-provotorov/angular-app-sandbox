import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

import { getSearchUrl } from "./core/helpers";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    /**
     * Loading flag.
     */
    public isLoading: boolean = false;

    /**
     * Array of films from API.
     */
    public resultFilms: Array<string> = [];

    /**
     * Makes response to API and fetching mapped-data to resultFilms Array
     */
    public getFilmsFromApi(searchQuery: string): void {
        this.isLoading = true;
        if (!searchQuery.trim()) {
            this.resultFilms = ["Type something for search"];
        } else {
            const filmsStream$: Observable<any> = this.http.get(getSearchUrl(searchQuery)).pipe(
                distinctUntilChanged(),
                map((data: any) => {
                    if (data.results.length > 10) {
                        data.results.length = 10;
                    }
                    return data.results.map((result: any) => result.title);
                })
            );
            filmsStream$.subscribe(
                (response: Array<string>): void => {
                    if (!response.length) {
                        this.resultFilms = ["There are no such films"];
                    } else {
                        this.resultFilms = response;
                    }
                },
                (error: any): void => {
                    console.log(error.message);
                }
            );
        }
        this.isLoading = false;
    }

    constructor(private http: HttpClient) {}
}
