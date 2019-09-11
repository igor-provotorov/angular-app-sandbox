import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { getSearchUrl } from "../../helpers";
import { SearchFilms } from "./models/search-films.interface";
import { ResultMovie } from "./models/result-movie.interface";

@Injectable()
export class SearchFilmsService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    /** Makes response to API and fetching mapped-data. */
    public getFilmsFromApi(searchQuery: string): Observable<Array<string>> {
        return this.http.get<SearchFilms>(getSearchUrl(searchQuery)).pipe(
            map((data: SearchFilms) => {
                if (!data.results.length) {
                    return ["There are no such films"];
                } else {
                    return data.results.map((result: ResultMovie) => result.title);
                }
            })
        );
    }
}
