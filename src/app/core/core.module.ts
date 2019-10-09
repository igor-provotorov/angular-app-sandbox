import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/index";
import { reducers } from "./store/index";
import { StoreFacadeModule } from "./store-facades/index";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";

@NgModule({
    imports: [
        ServiceModule,
        StoreModule.forRoot(reducers),
        StoreFacadeModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
})
export class CoreModule {}
