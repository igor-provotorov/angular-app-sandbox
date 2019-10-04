import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { MovieSearchPageModule } from "./movie-search-page/movie-search-page.module";
import { NavigationMenuModule } from "./navigation-menu/navigation-menu.module";
import { FilmsToWatchPageModule } from "./films-to-watch-page/films-to-watch-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        MovieSearchPageModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NavigationMenuModule,
        FilmsToWatchPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
