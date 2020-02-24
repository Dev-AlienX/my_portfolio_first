import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  workList = [];
  constructor() {}

  ngOnInit() {
    this.workList = [
      {
        name: 'motercycle healmet',
        category: 'photo',
        img: 'assets/img/work1.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Minimalism Shapes',
        category: 'Video',
        img: 'assets/img/work2.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Staircase',
        category: 'Music',
        img: 'assets/img/work3.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Staircase',
        category: 'Design',
        img: 'assets/img/work4.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Mobile Application',
        category: 'photo',
        img: 'assets/img/work5.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Gereal Travels',
        category: 'photo',
        img: 'assets/img/work6.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Daylight Entrance',
        category: 'photo',
        img: 'assets/img/work7.jpg',
        icon: 'fa-camera'
      },
      {
        name: 'Social Website',
        category: 'photo',
        img: 'assets/img/work8.jpg',
        icon: 'fa-camera'
      }
    ];
  }
}
