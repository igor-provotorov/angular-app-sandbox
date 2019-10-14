import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/index";
import { reducers } from "./store/index";
import { StoreFacadeModule } from "./store-facades/index";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";

import { EffectsModule } from "@ngrx/effects";
import { FilmsToWatchEffects } from "./store/films-to-watch/films-to-watch.effect";

@NgModule({
    imports: [
        ServiceModule,
        StoreModule.forRoot(reducers),
        StoreFacadeModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([FilmsToWatchEffects]),
    ],
})
export class CoreModule {}
