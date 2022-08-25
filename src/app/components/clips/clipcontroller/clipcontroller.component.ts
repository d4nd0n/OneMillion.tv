import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ClipComponent } from '../clip/clip.component';

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
      transition('hide => show', [
        animate(800, style({ transform: 'translateY(-100%)' })),
      ]),

      transition('show => hide', [
        style({ opacity: 0, width: 0 }),
        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
      ]),
    ]),
  ],
})
export class ClipcontrollerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  state = 'show';

  onClick() {}

  changeState(newItem: string) {
    this.state = newItem == 'default' ? 'show' : 'hide';
  }
}
