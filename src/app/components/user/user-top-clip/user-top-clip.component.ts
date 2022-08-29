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
      transition('hide => show', [
        query('.clipRow', [
          style({ opacity: 0, height: 0 }),
          stagger(30, [
            animate('0.5s ease-in', style({ opacity: 1, height: '*' })),
          ]),
        ]),
        query('.shortDescription', [
          style({ opacity: 0, height: 0 }),
          stagger(30, [
            animate('0.5s ease-in', style({ opacity: 0, height: 0 })),
          ]),
        ]),
        query('.longDescription', [
          style({ opacity: 0, height: 0 }),
          stagger(30, [
            animate('0.5s ease-in', style({ opacity: 1, height: '*' })),
          ]),
        ]),
      ]),
      transition('show => hide', [
        query('.clipRow', [
          style({ opacity: 1, height: '*' }),
          stagger(30, [
            animate('0.5s ease-in-out', style({ opacity: 1, height: 0 })),
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

    if (this.state == 'show') {
      document.body.style.setProperty('--rows-opacity', '1');
      document.body.style.setProperty('--rows-height', '*');
      document.body.style.setProperty('--text-short-opacity', '0');
      document.body.style.setProperty('--text-short-height', '0');
      document.body.style.setProperty('--text-long-opacity', '1');
      document.body.style.setProperty('--text-long-height', '*');
    } else {
      setTimeout(() => {
        document.body.style.setProperty('--rows-opacity', '0');
        document.body.style.setProperty('--rows-height', '0');
        document.body.style.setProperty('--text-short-opacity', '1');
        document.body.style.setProperty('--text-short-height', '*');
        document.body.style.setProperty('--text-long-opacity', '0');
        document.body.style.setProperty('--text-long-height', '0');
      }, 510);
    }
  }
}
