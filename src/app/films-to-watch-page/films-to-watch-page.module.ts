import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilmsToWatchPageComponent } from "./films-to-watch-page.component";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [FilmsToWatchPageComponent],
    imports: [CommonModule, MatListModule, MatExpansionModule, MatButtonModule],
})
export class FilmsToWatchPageModule {}
