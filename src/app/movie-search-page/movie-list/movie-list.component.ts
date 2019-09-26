import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

import { ModifiedResultMovie } from "src/app/core/services/search-films-service/models/index";

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
}
