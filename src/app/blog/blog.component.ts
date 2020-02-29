import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // styles: [
  //   `
  //     :host {
  //       display: block;
  //       overflow: hidden;
  //       width:100%;
  //       height:100%;
  //     }
  //   `
  // ],
  // animations: [
  //   trigger('expand', [
  //     state('in', style({ width: '*', opacity: '*'  })),
  //     transition(':leave', [
  //       style({ width: '*', opacity: '*' }),
  //       animate(250, style({ width: 0 , opacity: 0 }))
  //     ]),
  //     transition(':enter', [
  //       style({ width: 0 , opacity: 0 }),
  //       animate(250, style({ width: '*', opacity: '*'  }))
  //     ])
  //   ])
  // ],
  // host: { '[@expand]': 'in' }
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
