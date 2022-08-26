import { Component, OnInit } from '@angular/core';

import {
  animate,
  query,
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
      transition('hide', [
        query('.clipRow', [
          style({ opacity: 0, height: 0 }),
          stagger(30, [animate(0, style({ opacity: 0, height: 0 }))]),
        ]),
      ]),
      transition('show', [
        query('.clipRow', [
          style({ opacity: 1, height: '*' }),
          stagger(30, [animate(0, style({ opacity: 1, height: '*' }))]),
        ]),
      ]),
      transition('hide => show', [
        query('.clipRow', [
          style({ opacity: 0, height: 0 }),
          stagger(30, [
            animate('3.5s ease-in-out', style({ opacity: 1, height: '*' })),
          ]),
        ]),
      ]),
      transition('show => hide', [
        query('.clipRow', [
          style({ opacity: 1, height: '*' }),
          stagger(30, [
            animate('3.5s ease-in-out', style({ opacity: 1, height: 0 })),
          ]),
        ]),
      ]),
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
