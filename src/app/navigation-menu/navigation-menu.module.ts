import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NavigationMenuComponent } from "./navigation-menu.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [NavigationMenuComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
    ],
    providers: [],
    exports: [NavigationMenuComponent],
})
export class NavigationMenuModule {}
