import { NgModule, APP_INITIALIZER } from "@angular/core";

import { StoreModule, Store } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { ServiceModule } from "./services/index";
import { reducers, State, GetFilmsToWatch } from "./store/index";
import { StoreFacadeModule } from "./store-facades/index";
import { environment } from "../../environments/index";
import { effects } from "./effects/index";

@NgModule({
    imports: [
        ServiceModule,
        StoreModule.forRoot(reducers),
        StoreFacadeModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot(effects),
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (store: Store<State>): (() => void) => {
                return (): void => {
                    store.dispatch(new GetFilmsToWatch());
                };
            },
            multi: true,
            deps: [Store],
        },
    ],
})
export class CoreModule {}
