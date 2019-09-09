import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

import { getSearchUrl } from "../helpers";

@Injectable()
export class SearchFilmsService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    /**
     * Makes response to API and fetching mapped-data.
     */
    public getFilmsFromApi(searchQuery: string): Observable<any> {
        const filmsStream$: Observable<any> = this.http.get(getSearchUrl(searchQuery)).pipe(
            distinctUntilChanged(),
            map((data: any) => {
                if (data.results.length > 10) {
                    data.results.length = 10;
                }
                return data.results.map((result: any) => result.title);
            })
        );

        return filmsStream$;
    }
}
