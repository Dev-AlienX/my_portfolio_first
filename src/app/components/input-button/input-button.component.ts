import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() text = '';
  @Input() withIcon = true;
  @Output() btnClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClickbutton(event) {
    this.btnClick.emit(event);
  }
}
