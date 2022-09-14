import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger, } from '@angular/animations';
let ClipcontrollerComponent = class ClipcontrollerComponent {
    constructor() {
        this.state = 'show';
    }
    ngOnInit() { }
    changeState(newItem) {
        this.state = newItem == 'default' ? 'show' : 'hide';
        if (this.state == 'show') {
            document.body.style.setProperty('--margin-top-arrow', '0');
        }
        else {
            document.body.style.setProperty('--margin-top-arrow', '-60px');
        }
    }
};
ClipcontrollerComponent = __decorate([
    Component({
        selector: 'app-clipcontroller',
        templateUrl: './clipcontroller.component.html',
        styleUrls: ['./clipcontroller.component.css'],
        animations: [
            trigger('showState', [
                state('hide', style({ opacity: 0, height: 0 })),
                transition('hide => show', [
                    style({ opacity: 0, height: 0 }),
                    animate('300ms ease-in', style({ opacity: 1, height: '*' })),
                ]),
                transition('show => hide', [
                    style({ opacity: 1, height: '*' }),
                    animate('300ms ease-out', style({ opacity: 0, height: 0 })),
                ]),
            ]),
        ],
    })
], ClipcontrollerComponent);
export { ClipcontrollerComponent };
//# sourceMappingURL=clipcontroller.component.js.map