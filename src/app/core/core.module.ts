import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/service.module";
import { reducers } from "./store/reducers";
import { FilmsToWatchStoreFacade } from "./index";

@NgModule({
    imports: [ServiceModule, StoreModule.forRoot(reducers)],
    providers: [FilmsToWatchStoreFacade],
})
export class CoreModule {}
