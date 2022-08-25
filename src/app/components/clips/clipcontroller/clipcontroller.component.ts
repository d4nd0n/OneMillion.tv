import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ClipComponent } from '../clip/clip.component';

@Component({
  selector: 'app-clipcontroller',
  templateUrl: './clipcontroller.component.html',
  styleUrls: ['./clipcontroller.component.css'],
})
export class ClipcontrollerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isVisible = false;
}
