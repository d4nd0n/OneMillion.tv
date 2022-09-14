import { __decorate } from "tslib";
import { Component, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
let CarouselComponent = class CarouselComponent {
    constructor(config) {
        this.name = 'Angular ' + VERSION.major;
        this.images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
        // customize default values of carousels used by this component tree
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    ngOnInit() { }
};
CarouselComponent = __decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.css'],
        providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map