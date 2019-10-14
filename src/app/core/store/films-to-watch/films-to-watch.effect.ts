import { Injectable } from "@angular/core";

import { tap } from "rxjs/operators";

import { Actions, ofType, createEffect } from "@ngrx/effects";

import { LocalStorageService } from "../../services/index";
import { FilmsToWatchActionTypes, FilmsToWatchActions } from "./films-to-watch.action";

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
     * Create effect Observable property.
     */
    public storeActions$: Actions<FilmsToWatchActions>;

    constructor(actions$: Actions<FilmsToWatchActions>, localStorageService: LocalStorageService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.storeActions$ = createEffect(
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
    }
}
