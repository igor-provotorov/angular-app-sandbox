import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/index";
import { reducers } from "./store/index";
import { StoreFacadeModule } from "./store-facades/index";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
    imports: [
        ServiceModule,
        StoreModule.forRoot(reducers),
        StoreFacadeModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
})
export class CoreModule {}
