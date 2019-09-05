import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"],
})
export class InputComponent {
    @Output() addValue: EventEmitter<string> = new EventEmitter<string>();

    inputValue = "";

    onChangeInput() {
        this.addValue.emit(this.inputValue);
        this.inputValue = "";
    }
}
