import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() name = '';
  @Input() value = 50;
  @Input() type = '';
  circleBack = [];
  donutValue = '';
  // [value]="progress"
  // tslint:disable-next-line: deprecation
  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.circleBack.push({ id: index, active: false });
    }
    if (this.type === 'dots') {
      const precentage = Math.floor(this.value / 10);
      for (let index = 0; index < precentage; index++) {
        this.circleBack[index].active = true;
      }
    } else if (this.type === 'donut') {
      this.donutValue = 'p' + this.round(this.value);
    }
  }
  round(x) {
    return x % 5 < 3
      ? x % 5 === 0
        ? x
        : Math.floor(x / 5) * 5
      : Math.ceil(x / 5) * 5;
  }
}
