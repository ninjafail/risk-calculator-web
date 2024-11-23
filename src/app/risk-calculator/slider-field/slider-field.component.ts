import {Component, Input, OnInit} from '@angular/core';
import { SliderField } from "../classes/stratification.classes";

@Component({
  selector: 'app-slider-field',
  templateUrl: './slider-field.component.html',
  styleUrls: ['./slider-field.component.css']
})
export class SliderFieldComponent {
  @Input() sliderFields!: SliderField[];
  constructor() { }

  change(df: SliderField) {
    if (df.isChecked()) df.uncheck();
    else df.check();
  }
}

