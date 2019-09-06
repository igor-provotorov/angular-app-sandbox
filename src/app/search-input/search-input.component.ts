import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-search-input",
    templateUrl: "./search-input.component.html",
    styleUrls: ["./search-input.component.scss"],
})
export class SearchInputComponent {
    /**
     * Create output new EventEmmiter
     */
    @Output()
    public addValue: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Value from input
     */
    public inputValue: string;

    /**
     * Emit value from input and clear input value.
     */
    public onChangeInput(): boolean {
        this.addValue.emit(this.inputValue);
        this.inputValue = "";
        return false;
    }
}
