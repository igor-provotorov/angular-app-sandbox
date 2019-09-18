import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of, forkJoin } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { SearchFilms, ResultMovie, ModifiedResultMovie, NoSuchMovies, ExtendedResultMovie } from "./models/index";
import { getSearchUrl, getMovieDetailsUrl } from "../../utils/index";
import { transformResultMovies } from "../../mappers/index";

@Injectable()
export class SearchFilmsService {
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    /**
     * Makes response to API and fetching mapped-data.
     */
    public getFilmsFromApi(searchQuery: string): Observable<Array<ModifiedResultMovie>> {
        return this.http.get<SearchFilms>(getSearchUrl(searchQuery)).pipe(
            map((data: SearchFilms) => data.results),
            switchMap((movies: Array<ResultMovie>) => {
                if (movies.length) {
                    return forkJoin(
                        movies.map((movie: ResultMovie) =>
                            this.http.get<ExtendedResultMovie>(getMovieDetailsUrl(movie.id))
                        )
                    );
                } else {
                    return of([]);
                }
            }),
            map((data: Array<ExtendedResultMovie>) => {
                if (data.length) {
                    return transformResultMovies(data);
                } else {
                    const result: Array<NoSuchMovies> = [
                        {
                            title: "No such movies",
                        },
                    ];
                    return result;
                }
            })
        );
    }
}
