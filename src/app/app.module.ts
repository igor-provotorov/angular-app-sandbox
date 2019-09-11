import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { MovieSearchPageModule } from "./movie-search-page/movie-search-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, MovieSearchPageModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
