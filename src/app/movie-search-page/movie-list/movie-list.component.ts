import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

import { MovieWithCheckboxValue, NoSuchMovies } from "src/app/core/index";

@Component({
    selector: "app-movie-list",
    templateUrl: "./movie-list.component.html",
    styleUrls: ["./movie-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
    /**
     * Import array of data about found movies.
     */
    @Input()
    public resultsFilms: Array<MovieWithCheckboxValue | NoSuchMovies>;

    /**
     * Create output new EventEmmiter.
     */
    @Output()
    public checkBoxClicked: EventEmitter<MovieWithCheckboxValue> = new EventEmitter<MovieWithCheckboxValue>();

    /**
     * Emit movie with checkbox value from movie-list-item-component if ckeckbox was clicked.
     */
    public onCheckBoxClicked(movie: MovieWithCheckboxValue): void {
        this.checkBoxClicked.emit(movie);
    }

    /**
     * trackBy function for optimize painting movies on the page.
     */
    trackByFn(_: number, film: MovieWithCheckboxValue): number {
        return film.id;
    }
}
