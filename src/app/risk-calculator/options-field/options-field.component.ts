import {Component, Input } from '@angular/core';
import {SliderField, OptionField, CheckableWeightedField} from "../classes/stratification.classes";

@Component({
  selector: 'app-options-field',
  templateUrl: './options-field.component.html',
  styleUrls: ['./options-field.component.css']
})
export class OptionsFieldComponent {
  @Input() optionFields!: OptionField[];

  constructor() { }

  setOption(of: OptionField, df: CheckableWeightedField) {
    of.options.map((df) => df.uncheck())
    df.check()
  }
}
