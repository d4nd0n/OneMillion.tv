import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in')),
    ]),
  ],
})
export class ArrowDownComponent implements OnInit {
  constructor() {}

  state: string = 'default';
  imagePath = 'https://i.postimg.cc/nzj2ZHmh/arrow-down.png';

  ngOnInit() {}

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  onClick() {
    this.rotate();
  }
}
