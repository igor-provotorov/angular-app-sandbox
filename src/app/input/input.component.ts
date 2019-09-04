import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
    @Input()
    @Output()
    public inputValue: string;

    constructor() {}

    changeInputValue(value: string): void {
        this.inputValue = value;
    }

    ngOnInit() {}
}
