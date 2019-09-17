import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { ModifiedResultMovie } from "src/app/core/services/search-films-service/models/index";

@Component({
    selector: "app-movie-list-item",
    templateUrl: "./movie-list-item.component.html",
    styleUrls: ["./movie-list-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListItemComponent {
    /** import data about found movie */
    @Input()
    public film: ModifiedResultMovie;
}
