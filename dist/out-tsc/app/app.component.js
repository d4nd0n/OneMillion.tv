import { __decorate } from "tslib";
import { Component, VERSION } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map