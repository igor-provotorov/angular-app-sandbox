import { createSelector, MemoizedSelector, DefaultProjectorFn } from "@ngrx/store";

import { State } from "../../store/index";
import { FilmsToWatchState } from "./models/index";
import { MovieWithCheckboxValue } from "../../services/index";

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
