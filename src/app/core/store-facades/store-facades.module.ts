import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilmsToWatchStoreFacade } from "./films-to-watch/index";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [FilmsToWatchStoreFacade],
})
export class StoreFacadeModule {}
