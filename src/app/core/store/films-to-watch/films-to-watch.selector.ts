import { createSelector, MemoizedSelector, DefaultProjectorFn } from "@ngrx/store";

import { State } from "../../store/index";
import { MovieWithCheckboxValue } from "../../services/index";
import { FilmsToWatchState } from "./films-to-watch-state.model";

export const selectFilmToWatchState: (param: State) => FilmsToWatchState = (state: State): FilmsToWatchState =>
    state.filmsToWatch;

export const selectFilmToWatchList: MemoizedSelector<
    State,
    Array<MovieWithCheckboxValue>,
    DefaultProjectorFn<Array<MovieWithCheckboxValue>>
> = createSelector(
    selectFilmToWatchState,
    (state: FilmsToWatchState) => state.filmsToWatch
);
