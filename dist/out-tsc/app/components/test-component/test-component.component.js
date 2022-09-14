import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let TestComponentComponent = class TestComponentComponent {
    constructor() {
        this.chatState = 'show';
        this.name = 'Video events';
        this.videoSource = '';
        this.startedPlay = false;
        this.show = false;
    }
    ngOnInit() { }
    pauseVideo(videoplayer) {
        videoplayer.nativeElement.play();
        // this.startedPlay = true;
        // if(this.startedPlay == true)
        // {
        setTimeout(() => {
            videoplayer.nativeElement.pause();
            if (videoplayer.nativeElement.paused) {
                this.show = !this.show;
            }
        }, 5000);
        // }
    }
    closebutton(videoplayer) {
        this.show = !this.show;
        videoplayer.nativeElement.play();
    }
    changeState(newItem) {
        this.chatState = newItem == 'default' ? 'show' : 'hide';
    }
};
__decorate([
    ViewChild('videoPlayer')
], TestComponentComponent.prototype, "videoplayer", void 0);
TestComponentComponent = __decorate([
    Component({
        selector: 'app-test-component',
        templateUrl: './test-component.component.html',
        styleUrls: ['./test-component.component.css']
    })
], TestComponentComponent);
export { TestComponentComponent };
//# sourceMappingURL=test-component.component.js.map