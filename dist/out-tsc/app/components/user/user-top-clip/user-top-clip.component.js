import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { animate, query, stagger, style, transition, trigger, } from '@angular/animations';
let UserTopClipComponent = class UserTopClipComponent {
    constructor() {
        this.state = 'show';
    }
    ngOnInit() { }
    changeState(newItem) {
        this.state = newItem == 'default' ? 'show' : 'hide';
        if (this.state == 'show') {
            document.body.style.setProperty('--rows-opacity', '1');
            document.body.style.setProperty('--rows-height', '*');
            document.body.style.setProperty('--text-short-opacity', '0');
            document.body.style.setProperty('--text-short-height', '0');
            document.body.style.setProperty('--text-long-opacity', '1');
            document.body.style.setProperty('--text-long-height', '*');
            document.body.style.setProperty('--text-short', 'none');
            document.body.style.setProperty('--text-long', 'block');
        }
        else {
            setTimeout(() => {
                document.body.style.setProperty('--rows-opacity', '0');
                document.body.style.setProperty('--rows-height', '0');
            }, 210);
            document.body.style.setProperty('--text-short-opacity', '1');
            document.body.style.setProperty('--text-short-height', '*');
            document.body.style.setProperty('--text-long-opacity', '0');
            document.body.style.setProperty('--text-long-height', '0');
            document.body.style.setProperty('--text-short', 'block');
            document.body.style.setProperty('--text-long', 'none');
        }
    }
};
UserTopClipComponent = __decorate([
    Component({
        selector: 'app-user-top-clip',
        templateUrl: './user-top-clip.component.html',
        styleUrls: ['./user-top-clip.component.css'],
        animations: [
            trigger('showState', [
                transition('hide => show', [
                    query('.container-clip-rows', [
                        style({ opacity: 0, height: 0 }),
                        stagger(30, [
                            animate('0.2s ease-in', style({ opacity: 1, height: '*' })),
                        ]),
                    ]),
                ]),
                transition('show => hide', [
                    query('.container-clip-rows', [
                        style({ opacity: 1, height: '*' }),
                        stagger(30, [animate('0.2s ease', style({ opacity: 0, height: 0 }))]),
                    ]),
                ]),
            ]),
        ],
    })
], UserTopClipComponent);
export { UserTopClipComponent };
//# sourceMappingURL=user-top-clip.component.js.map