import { Component, OnInit, Input } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  quote: string;
  id: number;
  writer: string;
  aboutData: any = [];
  myService: any = [];
  funfact: any = [];
  clients: any = [];
  testomonials: any = [];
  aboutMe: string;
  age: string;
  Residence: string;
  Freelance: string;
  Address: string;
  designation: any;

  constructor(
    private quotes: QuotesService,
    private resumeDataService: ResumeDataService
  ) {}

  ngOnInit() {
    this.resumeDataService.getAllData().subscribe(data => {
      this.aboutData.push(data[0].about);
      this.age = data[0].age;
      this.Residence = data[0].resedence;
      this.Freelance = data[0].Freelance;
      this.Address = data[0].address;
      this.loadData();
    });

    // this.quotes.getJSON().subscribe(data => {
    //   data.forEach(element => {
    //     if (newId === element.id) {
    //       this.quote = element.quotes;
    //       this.writer = element.writer;
    //     }
    //   });
    // });
  }

  loadData() {
    if (this.aboutData.length) {
      this.aboutMe = this.aboutData[0][0].aboutMe;
      this.myService = this.aboutData[0][1].myService;
      this.funfact = this.aboutData[0][2].funfact;
      this.clients = this.aboutData[0][3].clients;
      this.testomonials = this.aboutData[0][4].testomonials;
      this.loadQuotes(this.testomonials);
    } else {
      setTimeout(() => {
        this.loadData();
      }, 50);
    }
  }
  loadQuotes(data) {
    const newId = Math.floor(Math.random() * 3) + 1;
    data.forEach(element => {
      if (newId === element.id) {
        this.quote = element.quotes;
        this.writer = element.writer;
        this.designation = element.designation;
      }
    });
  }
}
