import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { MovieSearchPageModule } from "./movie-search-page/movie-search-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, MovieSearchPageModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
