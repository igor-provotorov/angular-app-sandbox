import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MovieSearchPageComponent } from "./movie-search-page/movie-search-page.component";
import { FilmsToWatchPageComponent } from "./films-to-watch-page/films-to-watch-page.component";

const routes: Routes = [
    { path: "", component: MovieSearchPageComponent },
    { path: "films-to-watch", component: FilmsToWatchPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
