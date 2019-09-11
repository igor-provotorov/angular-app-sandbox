import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchInputComponent } from "./search-input/search-input.component";
import { MovieSearchPageComponent } from "./movie-search-page.component";

@NgModule({
    declarations: [SearchInputComponent, MovieSearchPageComponent],
    imports: [CommonModule, FormsModule],
    providers: [],
    exports: [MovieSearchPageComponent],
})
export class MovieSearchPageModule {}
