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
      state('show', style({ opacity: 1, height: '*' })),
      state('hide', style({ opacity: 1, height: '*' })),
      transition('hide => show', [
        query('.clipRow', [
          style({ opacity: 1, transform: 'translateY(-100px)' }),
          stagger(30, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
      transition('show => hide', [
        style({ opacity: 0, height: '*' }),
        animate('300ms ease-in', style({ opacity: 1, height: '*' })),
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
