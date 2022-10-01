import {Component, EventEmitter} from '@angular/core';
import { Therapy, OptionField, DataField } from "./therapy.classes";
import { THERAPIES_DATA } from "./therapies.data";

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.css']
})
export class RiskCalculatorComponent {
  title: string = "Risk Calculator";
  subtitle: string = "Calculate your risk of xy in drölf years.";

  therapies: Therapy[] = THERAPIES_DATA;
  chosenTherapy: Therapy = this.therapies[0];

  test = null;

  constructor() {
  }


}

