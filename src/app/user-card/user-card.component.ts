import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userName: string;
  designetion: string;
  constructor() { }

  ngOnInit() {
    this.userName = 'Win CNG';
    this.designetion = 'Web Devloper';
  }

}
