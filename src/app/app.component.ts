import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    /**
     * Title in paragraph
     */
    public title: string = "";

    /**
     * Update title in paragraph.
     */
    public updateInfo(inputVal: string): void {
        this.title = inputVal;
    }
}
