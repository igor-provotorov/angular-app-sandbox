import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchInputComponent } from "./search-input/search-input.component";
import { MovieSearchPageComponent } from "./movie-search-page.component";
import { MovieListItemComponent } from "./movie-list-item/movie-list-item.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

@NgModule({
    declarations: [MovieSearchPageComponent, SearchInputComponent, MovieListItemComponent, MovieListComponent],
    imports: [CommonModule, FormsModule],
    providers: [],
    exports: [MovieSearchPageComponent],
})
export class MovieSearchPageModule {}
