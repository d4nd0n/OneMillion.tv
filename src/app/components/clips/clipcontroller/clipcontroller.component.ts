import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import {
  animate,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-clipcontroller',
  templateUrl: './clipcontroller.component.html',
  styleUrls: ['./clipcontroller.component.css'],
  animations: [
    trigger('showState', [
      state('hide', style({ opacity: 0, height: 0 })),
      transition('hide => show', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-in', style({ opacity: 1, height: '*' })),
      ]),
      transition('show => hide', [
        style({ opacity: 1, height: '*' }),
        animate('300ms ease-out', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class ClipcontrollerComponent implements OnInit {
  state = 'show';
  constructor() {}

  ngOnInit() {}
  changeState(newItem: string) {
    this.state = newItem == 'default' ? 'show' : 'hide';
  }
}
