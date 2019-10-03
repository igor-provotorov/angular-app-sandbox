import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NavigationMenuComponent } from "./navigation-menu.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [NavigationMenuComponent],
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, AppRoutingModule],
    providers: [],
    exports: [NavigationMenuComponent],
})
export class NavigationMenuModule {}
