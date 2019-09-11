import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SearchFilmsService } from "./";

@NgModule({
    imports: [HttpClientModule],
    providers: [SearchFilmsService],
})
export class ServiceModule {}
