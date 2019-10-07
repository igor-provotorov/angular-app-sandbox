import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";

import { ModifiedResultMovie, MovieWithCheckboxValue } from "../../core/index";

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
    public checkBoxClicked: EventEmitter<MovieWithCheckboxValue> = new EventEmitter<MovieWithCheckboxValue>();

    /**
     * Checkbox for wishlist movies property.
     */
    public isChecked: boolean = false;

    /**
     * Emit movie with checkbox value if ckeckbox was clicked.
     */
    public onCheckboxClicked(): void {
        this.isChecked = !this.isChecked;
        const result: MovieWithCheckboxValue = { ...this.film, checkboxValue: this.isChecked };
        this.checkBoxClicked.emit(result);
    }
}
