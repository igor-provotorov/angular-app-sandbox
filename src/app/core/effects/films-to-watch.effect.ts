import { Injectable } from "@angular/core";

import { tap, map } from "rxjs/operators";

import { Actions, ofType, createEffect } from "@ngrx/effects";

import { FilmsToWatchActionTypes, FilmsToWatchActions, GetFilmsToWatchSuccess } from "../store/index";
import { LocalStorageService, MovieWithCheckboxValue } from "../services/index";
import { FILMS_TO_WATCH_KEY } from "../constants/index";

@Injectable()
export class FilmsToWatchEffects {
    /**
     * Films to watch actions.
     */
    private actions$: Actions<FilmsToWatchActions>;

    /**
     * LocalStorageService injection.
     */
    private localStorageService: LocalStorageService;

    /**
     * Property for create effect to work with local storage actions.
     */
    public localStorageActions$: Actions<FilmsToWatchActions>;

    /**
     * Property for create effect to get movies from local storage
     * action, when the app will initialize.
     */
    public getFilmsToWatchActions$: Actions<FilmsToWatchActions>;

    constructor(actions$: Actions<FilmsToWatchActions>, localStorageService: LocalStorageService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.localStorageActions$ = createEffect(
            () =>
                this.actions$.pipe(
                    ofType(
                        FilmsToWatchActionTypes.ADD_FILM_TO_WATCH_LIST,
                        FilmsToWatchActionTypes.REMOVE_FILM_FROM_WATCH_LIST
                    ),
                    tap((action: FilmsToWatchActions) => {
                        switch (action.type) {
                            case FilmsToWatchActionTypes.ADD_FILM_TO_WATCH_LIST:
                                this.localStorageService.setSavedState(action.payload);
                                break;
                            case FilmsToWatchActionTypes.REMOVE_FILM_FROM_WATCH_LIST:
                                this.localStorageService.removeFromState(action.payload);
                                break;
                            default:
                                break;
                        }
                    })
                ),
            { dispatch: false }
        );

        this.getFilmsToWatchActions$ = createEffect(() =>
            this.actions$.pipe(
                ofType(FilmsToWatchActionTypes.GET_FILMS_TO_WATCH),
                map(() => {
                    const localStorageMovies: Array<MovieWithCheckboxValue> =
                        this.localStorageService.getSavedState(FILMS_TO_WATCH_KEY) || [];

                    return new GetFilmsToWatchSuccess(localStorageMovies);
                })
            )
        );
    }
}
