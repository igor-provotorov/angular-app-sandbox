import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"],
})
export class InputComponent {
    @Output()
    public addValue: EventEmitter<string> = new EventEmitter<string>();

    public inputValue = "";

    public onChangeInput(): boolean {
        this.addValue.emit(this.inputValue);
        this.inputValue = "";
        return false;
    }
}
