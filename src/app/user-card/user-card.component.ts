import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() config: any = [];
  userName: string;
  designetion: string;
  viewContact: boolean;
  constructor(private contactService: ContactServiceService) {}

  ngOnInit() {
    setTimeout(() => {
      if (this.config.length) {
        this.loadData();
      } else {
        this.ngOnInit();
      }
    }, 50);
    this.contactService.currentView.subscribe(viewContact => this.viewContact = viewContact)
  }

  loadData() {
    this.userName = this.config[0].name;
    this.designetion = this.config[0].designetion;
  }

  goToContact(e) {
    this.contactService.changeView(true)
    console.log('event' , e);

  }
}
