import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipcontroller',
  templateUrl: './clipcontroller.component.html',
  styleUrls: ['./clipcontroller.component.css'],
})
export class ClipcontrollerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  clipsLoad = (): void => {};
}
let loadtv = 'https://i.postimg.cc/mk3Ffj3V/tvstatic.gif';
let orange = 'https://i.postimg.cc/c4JPKsTm/tv.png';

const CLIPS = [
  { name: 'First', views: 100000, likes: 14000, imagePath: orange },
  { name: 'Second', views: 100000, likes: 14000, imagePath: orange },
  { name: 'Third', views: 100000, likes: 14000, imagePath: orange },
  { name: 'Fourth', views: 100000, likes: 14000, imagePath: orange },
  { name: 'Fifth', views: 100000, likes: 14000, imagePath: orange },
];

export class Clips {
  clips = CLIPS;

  trackHero(index, clip) {
    console.log(clip);
    return clip ? clip.id : undefined;
  }
}
