import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ClipService } from '../../../../services/clip.service';
import { Clip } from '../../../../models/clip';

import {
  animate,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
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
export class TestComponentComponent implements OnInit {
  state = 'show';
  clips;

  constructor(private clipService: ClipService){}

  ngOnInit() {
    this.getClips();   

    setTimeout(() => {
      console.log("data value");
      console.log(this.clips);
    }, 5000);

  }

  changeState(newItem: string) {
    this.state = newItem == 'default' ? 'show' : 'hide';

    if (this.state == 'show') {
      document.body.style.setProperty('--margin-top-arrow', '0');
    } else {
      document.body.style.setProperty('--margin-top-arrow', '-60px');
    }
  }

  getClips() {
    this.clipService
    .getClips()
    .subscribe(data => {
      this.clips = data.clips;
    });
  }
}
