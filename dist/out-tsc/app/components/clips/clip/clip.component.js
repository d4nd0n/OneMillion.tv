import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ClipComponent = class ClipComponent {
    constructor() {
        this.clipLoad = () => {
            let loadtv = 'https://i.postimg.cc/mk3Ffj3V/tvstatic.gif';
            let orange = 'https://i.postimg.cc/c4JPKsTm/tv.png';
            this.imagePath = loadtv;
            setTimeout(() => {
                this.imagePath = orange;
            }, 30000);
        };
    }
    ngOnInit() {
        this.clipLoad();
    }
};
ClipComponent = __decorate([
    Component({
        selector: 'app-clip',
        templateUrl: './clip.component.html',
        styleUrls: ['./clip.component.css'],
    })
], ClipComponent);
export { ClipComponent };
//# sourceMappingURL=clip.component.js.map