import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/index";
import { MovieSearchPageModule } from "./movie-search-page/index";
import { NavigationMenuModule } from "./navigation-menu/index";
import { FilmsToWatchPageModule } from "./films-to-watch-page/index";
import { AppRoutingModule } from "./app-routing.module";

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
