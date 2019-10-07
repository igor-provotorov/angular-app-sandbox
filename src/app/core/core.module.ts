import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { ServiceModule } from "./services/service.module";
import { reducers } from "./store/reducers";

@NgModule({
    imports: [ServiceModule, StoreModule.forRoot(reducers)],
})
export class CoreModule {}
