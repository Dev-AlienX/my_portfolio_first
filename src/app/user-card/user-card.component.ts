import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() config: any = [];
  userName: string;
  designetion: string;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      if (this.config.length) {
        this.loadData();
      } else {
        this.ngOnInit();
      }
    }, 50);
  }

  loadData() {
    this.userName = this.config[0].name;
    this.designetion = this.config[0].designetion;
  }
}
