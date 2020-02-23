import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ScreenResolutionService } from "../services/screen-resolution.service";

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
  constructor(private screenSize:ScreenResolutionService) {}

  ngOnInit() {
    // console.log(this.config);
  }
  navClicke(title) {
    this.navClicked.emit(title);
    this.config.forEach(elm => {
      if (elm.title === title) {
        elm.active = true;
      } else {
        elm.active = false;
      }
    });

  }
  // onResize(event) {
  //   debugger
  //  this.screenWidth = this.screenSize.getWidth();
  //  console.log(this.screenWidth);
   
  // }
}
