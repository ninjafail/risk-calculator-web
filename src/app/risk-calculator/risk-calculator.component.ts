import {Component, EventEmitter} from '@angular/core';
import { Therapy, OptionField, DataField } from "./therapy.classes";
import { THERAPIES_DATA } from "./therapies.data";
import {skip} from "rxjs";

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


  constructor() {
  }

  calculateRisk(): number {
    function sum (arr: number[]) {
      return arr.reduce((total, current) => {
        return total + current;
      }, 0);
    }

    function getDfWeights(dfArr: DataField[]): number[] {
      return dfArr.map((df) => df.getWeight())
    }

    function getOfWeights(ofArr: OptionField[]): number[] {
      return ofArr.map((of) => sum(getDfWeights(of.options)))
    }

    const options_sum = sum(getOfWeights(this.chosenTherapy.option_fields));
    const sliders_sum = sum(getDfWeights(this.chosenTherapy.slider_fields));

    return options_sum + sliders_sum
  }


}

