import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilmsToWatchPageComponent } from "./films-to-watch-page.component";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
    declarations: [FilmsToWatchPageComponent],
    imports: [CommonModule, MatListModule, MatExpansionModule],
})
export class FilmsToWatchPageModule {}
