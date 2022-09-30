import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {OptionField} from "../therapies";

@Component({
  selector: 'app-options-field',
  templateUrl: './options-field.component.html',
  styleUrls: ['./options-field.component.css']
})
export class OptionsFieldComponent implements OnChanges {
  @Input() optionFields!: OptionField[];

  constructor() { }

  ngOnChanges() {

  }
}
