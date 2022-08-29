import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ValueUnavailableKind } from '@angular/compiler-cli/src/ngtsc/reflection/src/host';

@Component({
  selector: 'app-arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateX(-180deg)' })),
      state('rotated', style({ transform: 'rotateX(0)' })),
      transition('rotated => default', animate('400ms ease-out')),
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
    console.log('CAZZO');
    this.rotate();
    this.emit(this.state);
  }

  @Output() newItemEvent = new EventEmitter<string>();

  emit(value: string) {
    this.newItemEvent.emit(value);
  }
}
