import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipcontroller',
  templateUrl: './clipcontroller.component.html',
  styleUrls: ['./clipcontroller.component.css'],
})
export class ClipcontrollerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  orange = 'https://i.postimg.cc/c4JPKsTm/tv.png';
  CLIPS = [
    { name: 'First', views: 100000, likes: 14000, imagePath: this.orange },
    { name: 'Second', views: 100000, likes: 14000, imagePath: this.orange },
    { name: 'Third', views: 100000, likes: 14000, imagePath: this.orange },
    { name: 'Fourth', views: 100000, likes: 14000, imagePath: this.orange },
    { name: 'Fifth', views: 100000, likes: 14000, imagePath: this.orange },
  ];

  clipsLoad = (): void => {};
}
