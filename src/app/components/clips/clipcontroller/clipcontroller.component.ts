import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ClipComponent } from '../clip/clip.component';

@Component({
  selector: 'app-clipcontroller',
  templateUrl: './clipcontroller.component.html',
  styleUrls: ['./clipcontroller.component.css'],
  animations: [
    trigger('showState', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
  ],
})
export class ClipcontrollerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  state = true;

  onClick() {}

  changeState(newItem: string) {
    this.state = newItem == 'default' ? true : false;
  }
}
