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
  styleUrls: ['./contact.component.scss']
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
