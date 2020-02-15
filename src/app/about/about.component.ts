import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // styles: [
  //   `
  //     :host {
  //       display: block;
  //       overflow: hidden;
  //       width: 100%;
  //       height: 100%;
  //       opacity: 1;
  //     }
  //   `
  // ],
  // animations: [
  //   trigger('expand', [
  //     state('in', style({ width: '*', opacity: '*' })),
  //     transition(':leave', [
  //       style({ width: '*', opacity: '*' }),
  //       animate(250, style({ width: 0, opacity: 0 }))
  //     ]),
  //     transition(':enter', [
  //       style({ width: 0, opacity: 0 }),
  //       animate(250, style({ width: '*', opacity: '*' }))
  //     ])
  //   ])
  // ],
  // tslint:disable-next-line:no-host-metadata-property
  // host: { '[@expand]': 'in' }
})
export class AboutComponent implements OnInit {
  quote: string;
  id: number;
  writer: string;
  constructor(private quotes: QuotesService) {}

  ngOnInit() {
    const newId = Math.floor(Math.random() * 3) + 1;
    this.quotes.getJSON().subscribe(data => {
      data.forEach(element => {
        if (newId === element.id) {
          this.quote = element.quotes;
          this.writer = element.writer;
        }
      });
    });
  }
}
