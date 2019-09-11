import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

import { getSearchUrl } from "../helpers";

export interface SearchFilms {
    page: number;
    total_results: number;
    total_pages: number;
    results: any[];
}

@Injectable()
export class SearchFilmsService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    /** Makes response to API and fetching mapped-data. */
    public getFilmsFromApi(searchQuery: string): Observable<any> {
        const filmsStream$: Observable<string[]> = this.http.get(getSearchUrl(searchQuery)).pipe(
            distinctUntilChanged(),
            map((data: SearchFilms) => data.results.map((result: any) => result.title))
        );

        return filmsStream$;
    }
}
