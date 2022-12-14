import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {DataField, OptionField, Therapy, Weight} from "./therapy.classes";
import {THERAPIES_DATA} from "./therapies.data";
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RiskCalculatorComponent implements OnInit {
  title: string = "Baseline cardiovascular toxicity risk stratification";
  subtitle: string = "Calculate your baseline cardiovascular toxicity risk";

  therapies: Therapy[] = THERAPIES_DATA;
  chosenTherapy: Therapy = this.therapies[0];
  resName = new FormControl("LOW");
  colorPlain: ThemePalette = undefined;
  resColor = new FormControl(this.colorPlain);

  FLAG = true;
  resultName: string = "LOW";
  @Input() resultColor: ThemePalette = undefined;
  risk: number = 0;

  constructor() {
  }

  ngOnInit() {
    for (let therapy of this.therapies) {
      // should not be the case, but if another value is checked, this does not uncheck the other options,
      // possibly in resulting into multiple checked options(radio-buttons)
      therapy.option_fields.map((of) => {
        if (of.name === "LVEF") {
          of.options[of.options.length - 1].check();
        } else {
          of.options[0].check();
        }
      })
      // (of.options.find((df) => df.weight === Weight.L)??of.options[0]).check()
    }
  }

  displayResult() {
    if (this.risk < Weight.M1) {
      this.resName.setValue("LOW");
      this.resColor.setValue(this.colorPlain);
    } else if (this.risk < Weight.H) {
      this.resName.setValue("MEDIUM");
      this.resColor.setValue("primary");
    } else if (this.risk < Weight.VH) {
      this.resName.setValue("HIGH");
      this.resColor.setValue("accent");
    } else {
      this.resName.setValue("VERY HIGH");
      this.resColor.setValue("warn");
    }
    if (this.risk < Weight.M1) {
      this.resultName = "LOW";
      this.resultColor = undefined;
    } else if (this.risk < Weight.H) {
      this.resultName = "MEDIUM";
      this.resultColor = "primary";
    } else if (this.risk < Weight.VH) {
      this.resultName = "HIGH";
      this.resultColor = "accent";
    } else {
      this.resultName = "VERY HIGH";
      this.resultColor = "warn";
    }
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

    this.risk = options_sum + sliders_sum;
    this.displayResult();
    return this.risk
  }

}

