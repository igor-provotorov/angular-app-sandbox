import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SearchFilmsService } from "./search-films-service/searchFilms.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [SearchFilmsService],
})
export class ServiceModule {}
