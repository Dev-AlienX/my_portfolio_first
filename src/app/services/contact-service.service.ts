import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private viewContact = new BehaviorSubject(false);
  currentView = this.viewContact.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log(message);
  }
  changeView(view: boolean) {
    this.viewContact.next(view);
    console.log(view);
  }


}
