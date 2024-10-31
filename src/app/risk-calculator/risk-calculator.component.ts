import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  Condition,
  DataField,
  OptionField,
  Recommendation,
  Therapy,
  Weight,
} from './therapy.classes';
import { THERAPIES_DATA } from './therapies.data';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RiskCalculatorComponent implements OnInit {
  title: string = 'Baseline cardiovascular toxicity risk stratification';
  subtitle: string = 'Calculate your baseline cardiovascular toxicity risk';

  therapies: Therapy[] = THERAPIES_DATA;
  chosenTherapy: Therapy = this.therapies[0];
  resName = new FormControl('LOW');
  colorPlain: ThemePalette = undefined;
  resColor = new FormControl(this.colorPlain);

  FLAG = true;
  resultName: string = 'LOW';
  @Input() resultColor: ThemePalette = undefined;
  resultRecommendation?: Recommendation;
  resultRisk: number = 0;

  constructor() {}

  ngOnInit() {
    for (let therapy of this.therapies) {
      this.reset(therapy);
    }
  }

  reset(therapy: Therapy) {
    // should not be the case, but if another value is checked, this does not uncheck the other options,
    // possibly in resulting into multiple checked options(radio-buttons)
    therapy.option_fields.map((of) => {
      of.options.map((df) => df.uncheck());
      if (of.name === 'LVEF') of.options[of.options.length - 1].check();
      else of.options[0].check();
    });
    therapy.slider_fields.map((df) => df.uncheck())
    // (of.options.find((df) => df.weight === Weight.L)??of.options[0]).check()
    this.calculateRisk();
  }

  calculateRisk(): number {
    function sum(arr: number[]) {
      return arr.reduce((total, current) => {
        return total + current;
      }, 0);
    }

    function getDfWeights(dfArr: DataField[]): number[] {
      return dfArr.map((df) => df.getWeight());
    }

    function getOfWeights(ofArr: OptionField[]): number[] {
      return ofArr.map((of) => sum(getDfWeights(of.options)));
    }

    const options_sum = sum(getOfWeights(this.chosenTherapy.option_fields));
    const sliders_sum = sum(getDfWeights(this.chosenTherapy.slider_fields));

    this.resultRisk = options_sum + sliders_sum;
    this.displayResult();
    return this.resultRisk;
  }

  displayResult() {
    this.giveRisk();
    this.giveRecommendation();
  }

  giveRisk() {
    if (this.resultRisk < Weight.M1) {
      this.resName.setValue('LOW');
      this.resColor.setValue(this.colorPlain);
    } else if (this.resultRisk < Weight.H) {
      this.resName.setValue('MEDIUM');
      this.resColor.setValue('primary');
    } else if (this.resultRisk < Weight.VH) {
      this.resName.setValue('HIGH');
      this.resColor.setValue('accent');
    } else {
      this.resName.setValue('VERY HIGH');
      this.resColor.setValue('warn');
    }
    if (this.resultRisk < Weight.M1) {
      this.resultName = 'LOW';
      this.resultColor = undefined;
    } else if (this.resultRisk < Weight.H) {
      this.resultName = 'MEDIUM';
      this.resultColor = 'primary';
    } else if (this.resultRisk < Weight.VH) {
      this.resultName = 'HIGH';
      this.resultColor = 'accent';
    } else {
      this.resultName = 'VERY HIGH';
      this.resultColor = 'warn';
    }
  }

  giveRecommendation() {
    this.resultRecommendation = this.chosenTherapy.recommendations.find(
      (rec) => {
        const condition = rec.condition;
        return this.isConditionTrue(rec.condition);
      }
    );
  }

  isConditionTrue(condition: Condition): boolean {
    switch (condition.type) {
      case 'AND':
        return (
          this.isConditionTrue(condition.conditions[0]) &&
          this.isConditionTrue(condition.conditions[1])
        );
      case 'OR':
        return (
          this.isConditionTrue(condition.conditions[0]) ||
          this.isConditionTrue(condition.conditions[1])
        );
      case 'NOT':
        return !this.isConditionTrue(condition.condition);
      case 'RANGE':
        return (
          condition.range[0] <= this.resultRisk &&
          this.resultRisk <= condition.range[1]
        );
      case 'SELECT':
        const sliderField = this.chosenTherapy.slider_fields.find(
          (df) => df.name === condition.select
        );
        if (!sliderField)
          throw new Error(
            `Couldn't find slider with name: ${condition.select}`
          );
        return sliderField.isChecked();
      case 'OPTION':
        const optionField = this.chosenTherapy.option_fields.find(
          (optionField) => optionField.name === condition.option
        );
        if (!optionField)
          throw new Error(
            `Couldn't find option with name: ${condition.option}`
          );
        const dataField = optionField.options.find(
          (df) => df.name === condition.value
        );
        if (!dataField)
          throw new Error(
            `Couldn't find data field with name: ${condition.value}`
          );
        return dataField.isChecked();
    }
  }
}
