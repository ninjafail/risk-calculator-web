import {Component, Input, OnInit} from '@angular/core';
import { DataField } from "../therapy.classes";

@Component({
  selector: 'app-slider-field',
  templateUrl: './slider-field.component.html',
  styleUrls: ['./slider-field.component.css']
})
export class SliderFieldComponent {
  @Input() sliderFields!: DataField[];
  constructor() { }

  change(df: DataField) {
    if (df.isChecked()) df.uncheck();
    else df.check();
  }
}

