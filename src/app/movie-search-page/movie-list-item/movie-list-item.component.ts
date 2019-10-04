import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

import { ModifiedResultMovie } from "../../core/services/search-films-service/models/index";

@Component({
    selector: "app-movie-list-item",
    templateUrl: "./movie-list-item.component.html",
    styleUrls: ["./movie-list-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListItemComponent {
    /**
     * Import data about found movie.
     */
    @Input()
    public film: ModifiedResultMovie;

    /**
     * Create output new EventEmmiter.
     */
    @Output()
    public checkBoxClicked: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Emit true value if checkbox was clicked.
     */
    onCheckboxClicked(): void {
        this.checkBoxClicked.emit(this.film.id);
    }
}
