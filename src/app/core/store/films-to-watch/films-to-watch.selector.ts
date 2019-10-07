import { createSelector, MemoizedSelector, DefaultProjectorFn } from "@ngrx/store";

import { State } from "../reducers";
import { FilmsToWatchState } from "./index";
import { MovieWithCheckboxValue } from "../../services/search-films-service/models/index";

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
