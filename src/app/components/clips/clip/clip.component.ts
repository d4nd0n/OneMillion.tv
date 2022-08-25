import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
})
export class ClipComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.clipLoad();
  }

  imagePath;
  clipLoad = (): void => {
    let loadtv = 'https://i.postimg.cc/mk3Ffj3V/tvstatic.gif';
    let orange = 'https://i.postimg.cc/c4JPKsTm/tv.png';
    this.imagePath = loadtv;

    setTimeout(() => {
      this.imagePath = orange;
    }, 5000);
  };
}
