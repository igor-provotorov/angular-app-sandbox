import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SearchFilmsService } from "./search-films-service/index";
import { LocalStorageService } from "./local-storage-service/index";

@NgModule({
    imports: [HttpClientModule],
    providers: [SearchFilmsService, LocalStorageService],
})
export class ServiceModule {}
