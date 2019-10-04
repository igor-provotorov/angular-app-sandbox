import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilmsToWatchPageComponent } from "./films-to-watch-page.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
    declarations: [FilmsToWatchPageComponent],
    imports: [CommonModule, MatListModule],
})
export class FilmsToWatchPageModule {}
