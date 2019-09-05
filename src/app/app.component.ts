import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})

/** Main component class */
export class AppComponent {
    /**
     * Title in paragraph
     */
    public title: string = "";

    /**
     * Update title in paragraph.
     * @param inputVal Value from input
     */
    public updateInfo(inputVal: string): void {
        this.title = inputVal;
    }
}
