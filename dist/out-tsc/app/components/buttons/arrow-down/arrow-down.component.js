import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
let ArrowDownComponent = class ArrowDownComponent {
    constructor() {
        this.state = 'default';
        this.imagePath = 'https://i.postimg.cc/nzj2ZHmh/arrow-down.png';
        this.newItemEvent = new EventEmitter();
    }
    ngOnInit() { }
    rotate() {
        this.state = this.state === 'default' ? 'rotated' : 'default';
    }
    onClick() {
        console.log('CAZZO');
        this.rotate();
        this.emit(this.state);
    }
    emit(value) {
        this.newItemEvent.emit(value);
    }
};
__decorate([
    Output()
], ArrowDownComponent.prototype, "newItemEvent", void 0);
ArrowDownComponent = __decorate([
    Component({
        selector: 'app-arrow-down',
        templateUrl: './arrow-down.component.html',
        styleUrls: ['./arrow-down.component.css'],
        animations: [
            trigger('rotatedState', [
                state('default', style({ transform: 'rotateX(-180deg)' })),
                state('rotated', style({ transform: 'rotateX(0)' })),
                transition('rotated => default', animate('400ms ease-out')),
                transition('default => rotated', animate('400ms ease-in')),
            ]),
        ],
    })
], ArrowDownComponent);
export { ArrowDownComponent };
//# sourceMappingURL=arrow-down.component.js.map