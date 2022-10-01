import {Component, Input } from '@angular/core';
import {DataField, OptionField} from "../therapy.classes";
import {getLocaleDateFormat} from "@angular/common";

@Component({
  selector: 'app-options-field',
  templateUrl: './options-field.component.html',
  styleUrls: ['./options-field.component.css']
})
export class OptionsFieldComponent {
  @Input() optionFields!: OptionField[];

  constructor() { }

  render() {

  }

  setOption(of: OptionField, df: DataField) {
    of.options.map((df) => df.uncheck())
    df.check()
  }
}
