import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {
  fullname = '';
  email = '';
  message = '';

  constructor() { }

  ngOnInit() {
  }
  sendMail(event)
  {
    this.email = 'fdsafdgad';
  }

}
