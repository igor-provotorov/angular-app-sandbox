import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
    @Input()
    @Output()
    public inputValue;

    constructor() {}

    changeInputValue(value) {
        this.inputValue = value;
    }

    ngOnInit() {}
}
