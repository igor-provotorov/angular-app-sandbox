import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

import { ModifiedResultMovie, MovieWithCheckboxValue } from "src/app/core/services/search-films-service/models/index";

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
    public resultsFilms: Array<ModifiedResultMovie>;

    /**
     * Create output new EventEmmiter.
     */
    @Output()
    public checkBoxClicked: EventEmitter<MovieWithCheckboxValue> = new EventEmitter<MovieWithCheckboxValue>();

    /**
     * Emit movie with checkbox value from movie-list-item-component if ckeckbox was clicked.
     */
    public onCheckBoxClicked(event: MovieWithCheckboxValue): void {
        this.checkBoxClicked.emit(event);
    }

    /**
     * trackBy function for optimize painting movies on the page.
     */
    trackByFn(_: number, film: ModifiedResultMovie): number {
        return film.id;
    }
}
