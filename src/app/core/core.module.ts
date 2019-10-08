import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/index";
import { reducers } from "./store/index";
import { StoreFacadeModule } from "./store-facades/index";

@NgModule({
    imports: [ServiceModule, StoreModule.forRoot(reducers), StoreFacadeModule],
})
export class CoreModule {}
