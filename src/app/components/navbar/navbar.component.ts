import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @Output : selectedPage
  @Input() config;
  @Output() navClicked = new EventEmitter();
  screenWidth = 0;
  visibility = 'visible';
  constructor() {}

  ngOnInit() {
  }
  navClicke(e) {
    this.navClicked.emit(e);
    this.config.forEach(elm => {
      // tslint:disable-next-line:prefer-const
      let btnName = (e.currentTarget.innerText).toLowerCase();
      if (elm.title === btnName) {
        elm.active = true;
      } else {
        elm.active = false;
      }
    });

  }
}
