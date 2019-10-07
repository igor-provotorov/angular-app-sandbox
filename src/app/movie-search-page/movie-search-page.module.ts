import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { SearchInputComponent } from "./search-input/search-input.component";
import { MovieSearchPageComponent } from "./movie-search-page.component";
import { MovieListItemComponent } from "./movie-list-item/movie-list-item.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

@NgModule({
    declarations: [MovieSearchPageComponent, SearchInputComponent, MovieListItemComponent, MovieListComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    exports: [MovieSearchPageComponent],
})
export class MovieSearchPageModule {}
