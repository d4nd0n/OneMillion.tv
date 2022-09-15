import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
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
})
export class VideoComponent implements OnInit {
  chatState = 'show';
  name = 'Video events';
  videoSource = "media\video\test_color.mp4"
  baseUrl = 'http://localhost:8090/onemillion/api/getClips';

  ngOnInit(){
  }

  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay: boolean = false;
  public show: boolean = false;
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
  }

  closebutton(videoplayer) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }

  changeState(newItem: string) {
    this.chatState = newItem == 'default' ? 'show' : 'hide';
  }
}