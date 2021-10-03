import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyPadButton } from '../../interfaces/keybutton.interface';

@Component({
  selector: 'amb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css'],
})
export class KeypadComponent implements OnInit {
  @Input() keypadButtons: KeyPadButton[] = [];
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  doAction(action: string) {
    this.onClick.emit(action);
  }
}
