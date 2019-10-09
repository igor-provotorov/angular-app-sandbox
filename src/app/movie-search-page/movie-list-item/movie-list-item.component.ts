import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

import { MovieWithCheckboxValue } from "../../core/index";

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
    public film: MovieWithCheckboxValue;

    /**
     * Create output new EventEmmiter with data about movie
     * when user is clicked to 'Add movie to wish list' button.
     */
    @Output()
    public checkBoxClicked: EventEmitter<MovieWithCheckboxValue> = new EventEmitter<MovieWithCheckboxValue>();

    /**
     * Emit movie with checkbox value if ckeckbox was clicked.
     */
    public onCheckboxClicked(): void {
        this.checkBoxClicked.emit(this.film);
    }
}
