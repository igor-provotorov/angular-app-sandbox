import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { SearchFilmsService } from "./core/services";

@NgModule({
    declarations: [AppComponent, SearchInputComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    providers: [SearchFilmsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
