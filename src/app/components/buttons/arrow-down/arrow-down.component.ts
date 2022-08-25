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
    trigger('arrowState', [
      state(
        'show',
        style({
          opacity: 0,
        })
      ),
      state(
        'hide',
        style({
          opacity: 1,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ],
})
export class ArrowDownComponent implements OnInit {
  constructor() {}

  show = false;
  imagePath = 'https://i.postimg.cc/nzj2ZHmh/arrow-down.png';

  ngOnInit() {}

  getStateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

  onClick() {
    this.toggle();
  }
}
