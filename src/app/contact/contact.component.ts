import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fullname = '';
  email = '';
  message = '';
  ContactData: any = [];
  age: string;
  Residence: string;
  Freelance: string;
  Address: string;
  designation: any;
  map: any = [];
  phone: any;
  myEmail:any = '';

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      this.ContactData.push(data[0].contact);
      this.age = data[0].age;
      this.Residence = data[0].resedence;
      this.Freelance = data[0].Freelance;
      this.Address = data[0].address;
      this.phone = data[0].mobile;
      this.myEmail = data[0].email;
    });
  }
  sendMail(event) {
    this.email = 'fdsafdgad';
  }
}
