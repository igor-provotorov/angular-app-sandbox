import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of, forkJoin, BehaviorSubject } from "rxjs";
import { map, switchMap, scan, catchError, tap } from "rxjs/operators";

import { SearchFilms, ResultMovie, ModifiedResultMovie, NoSuchMovies, ExtendedResultMovie } from "./models/index";
import { getSearchUrl, getMovieDetailsUrl } from "../../utils/index";
import { transformResultMovies } from "../../mappers/index";

@Injectable()
export class SearchFilmsService {
    private http: HttpClient;

    /**
     * Current page query parameter for searching data from API.
     */
    private startPage: number = 1;

    /**
     * Number of total pages in this particular query search.
     */
    private totalPages: number = 0;

    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * Is no more results flag.
     */
    public isNoMoreResults: boolean = false;

    /**
     * Subject that emit fetching data from current page.
     */
    public behaviorSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(this.startPage);

    /**
     * Makes response to API and fetching mapped-data.
     */
    public getFilmsFromApi(searchQuery: string): Observable<Array<ModifiedResultMovie>> {
        return this.behaviorSubject$.pipe(
            switchMap((currPage: number) => this.http.get<SearchFilms>(getSearchUrl(searchQuery, currPage))),

            tap((data: SearchFilms) => (this.totalPages = data.total_pages)),

            map((data: SearchFilms) => data.results),

            switchMap((movies: Array<ResultMovie>) => this.getDetailsFilmsInfo(movies)),

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
            }),

            scan((acc: Array<ModifiedResultMovie>, movies: Array<ModifiedResultMovie>) => {
                acc = [...acc, ...movies];

                return acc;
            }, []),

            catchError((err: Error) => {
                const result: Array<NoSuchMovies> = [
                    {
                        title: `#Error: ${err.name}`,
                    },
                ];

                return of(result);
            })
        );
    }

    /**
     * Emit fetching data from next page.
     */
    public nextPage(): void {
        if (this.startPage < this.totalPages) {
            this.startPage++;
            this.behaviorSubject$.next(this.startPage);
        } else {
            this.isNoMoreResults = true;
        }
    }

    /**
     * Fetch details movies info (actors, images, trailers)
     */
    private getDetailsFilmsInfo(movies: Array<ResultMovie>): Observable<Array<ExtendedResultMovie>> {
        if (movies.length) {
            return forkJoin(
                movies.map((movie: ResultMovie) => this.http.get<ExtendedResultMovie>(getMovieDetailsUrl(movie.id)))
            );
        } else {
            return of([]);
        }
    }
}
