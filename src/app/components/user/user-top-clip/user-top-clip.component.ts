import { Component, OnInit } from '@angular/core';

import {
  animate,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-user-top-clip',
  templateUrl: './user-top-clip.component.html',
  styleUrls: ['./user-top-clip.component.css'],
  animations: [
    trigger('showState', [
      transition('hide => show', []),
      transition('show => hide', []),
    ]),
  ],
})
export class UserTopClipComponent implements OnInit {
  state = 'show';
  constructor() {}

  ngOnInit() {}

  changeState(newItem: string) {
    this.state = newItem == 'default' ? 'show' : 'hide';
  }
}
