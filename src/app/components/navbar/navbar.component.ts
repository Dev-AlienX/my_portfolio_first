import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectorRef} from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  // @Output : selectedPage
  @Input() config;
  @Output() navClicked = new EventEmitter();
  screenWidth = 0;
  visibility = "visible";
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}
  navClicke(e) {
    this.navClicked.emit(e);
    let btnName = e.currentTarget.innerText.toLowerCase();
    this.config.forEach((elm) => {
      // tslint:disable-next-line:prefer-const
      if (elm.title === btnName) {
        elm.active = true;
      } else {
        elm.active = false;
      }
    });
    this.cdRef.detectChanges();
    
    
  }
}
