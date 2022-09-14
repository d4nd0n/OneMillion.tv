import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsertabComponent = class UsertabComponent {
    constructor() {
        this.descriptionState = 'short';
    }
    ngOnInit() { }
    showDescription() {
        this.descriptionState = this.descriptionState == 'long' ? 'short' : 'long';
        if (this.descriptionState == 'long') {
            document.body.style.setProperty('--long-opacity', '1');
            document.body.style.setProperty('--long-height', '*');
            document.body.style.setProperty('--short-opacity', '0');
            document.body.style.setProperty('--short-height', '0');
        }
        else {
            document.body.style.setProperty('--long-opacity', '0');
            document.body.style.setProperty('--long-height', '0');
            document.body.style.setProperty('--short-opacity', '1');
            document.body.style.setProperty('--short-height', '*');
        }
    }
};
UsertabComponent = __decorate([
    Component({
        selector: 'app-usertab',
        templateUrl: './usertab.component.html',
        styleUrls: ['./usertab.component.css'],
    })
], UsertabComponent);
export { UsertabComponent };
//# sourceMappingURL=usertab.component.js.map