import { __decorate } from "tslib";
import { Component, Injectable, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger, } from '@angular/animations';
let VideoComponent = class VideoComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.chatState = 'show';
        this.clips = [];
        this.name = 'Video events';
        this.videoSource = "media\video\test_color.mp4";
        this.baseUrl = 'http://localhost:8090/onemillion/api/getClips';
        this.startedPlay = false;
        this.show = false;
    }
    ngOnInit() {
        this.getData();
        console.log("call this shit" + this.clips.values.length);
        this.clips.forEach(element => {
            console.log("elemento:" + element);
        });
    }
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
    getData() {
        return this.httpClient.get(this.baseUrl).toPromise().then(data => {
            for (let key in data)
                if (data.hasOwnProperty(key))
                    this.clips.push(data[key]);
        });
    }
};
__decorate([
    ViewChild('videoPlayer')
], VideoComponent.prototype, "videoplayer", void 0);
VideoComponent = __decorate([
    Component({
        selector: 'app-video',
        templateUrl: './video.component.html',
        styleUrls: ['./video.component.css'],
        animations: [
            trigger('showState', [
                state('hide', style({ opacity: 0, height: 0 })),
                transition('hide => show', [
                    style({ opacity: 0, width: 0 }),
                    animate('300ms ease-in', style({ opacity: 1, width: '*' })),
                ]),
                transition('show => hide', [
                    style({ opacity: 1, width: '*' }),
                    animate('300ms ease-out', style({ opacity: 0, width: 0 })),
                ]),
            ]),
        ],
    }),
    Injectable()
], VideoComponent);
export { VideoComponent };
//# sourceMappingURL=video.component.js.map