import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  OptionField,
  Therapy,
  Stratification,
  CheckableWeightedField,
} from './classes/stratification.classes';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { TranslatableText, Weight } from './classes/stratification.types';
import { Condition } from './classes/condition.types';
import { CARDIOVASCULAR_TOXICITY_RISK_STRATIFICATION } from './data/cardio-tox-risk-translation.data';
import { translate } from '@jsverse/transloco';

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RiskCalculatorComponent implements OnInit {
  stratification: Stratification = CARDIOVASCULAR_TOXICITY_RISK_STRATIFICATION;
  title: TranslatableText = this.stratification.title;
  subtitle: TranslatableText = this.stratification.subtitle;
  therapySelectionLabel: TranslatableText =
    this.stratification.therapySelectionLabel;

  therapies: Therapy[] = this.stratification.therapies;
  chosenTherapy: Therapy = this.therapies[0];
  resName = new FormControl(translate('low-upper'));
  colorPlain: ThemePalette = undefined;
  resColor = new FormControl(this.colorPlain);

  FLAG = true;
  resultName: string = translate('low-upper');
  @Input() resultColor: ThemePalette = undefined;
  resultRecommendations?: TranslatableText[];
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
      of.options.map((df) => df.reset());
    });
    therapy.slider_fields.map((df) => df.reset());
    // (of.options.find((df) => df.weight === Weight.L)??of.options[0]).check()
    this.calculateRisk();
  }

  calculateRisk(): number {
    function sum(arr: number[]) {
      return arr.reduce((total, current) => {
        return total + current;
      }, 0);
    }

    function getDfWeights(dfArr: CheckableWeightedField[]): number[] {
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
      this.resName.setValue(translate('low-upper'));
      this.resColor.setValue(this.colorPlain);
    } else if (this.resultRisk < Weight.H) {
      this.resName.setValue(translate('medium-upper'));
      this.resColor.setValue('primary');
    } else if (this.resultRisk < Weight.VH) {
      this.resName.setValue(translate('high-upper'));
      this.resColor.setValue('accent');
    } else {
      this.resName.setValue(translate('very-high-upper'));
      this.resColor.setValue('warn');
    }
    if (this.resultRisk < Weight.M1) {
      this.resultName = translate('low-upper');
      this.resultColor = undefined;
    } else if (this.resultRisk < Weight.H) {
      this.resultName = translate('medium-upper');
      this.resultColor = 'primary';
    } else if (this.resultRisk < Weight.VH) {
      this.resultName = translate('high-upper');
      this.resultColor = 'accent';
    } else {
      this.resultName = translate('very-high-upper');
      this.resultColor = 'warn';
    }
  }

  giveRecommendation() {
    this.resultRecommendations =
      this.chosenTherapy.suggestedRecommendations.find((rec) => {
        const condition = rec.condition;
        return this.isConditionTrue(rec.condition);
      })?.recommendations;
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
          (df) => df.id === condition.selectId
        );
        if (!sliderField)
          throw new Error(
            `Couldn't find slider with id: ${condition.selectId}`
          );
        return sliderField.isChecked();
      case 'OPTION':
        const optionField = this.chosenTherapy.option_fields.find(
          (optionField) => optionField.id === condition.optionId
        );
        if (!optionField)
          throw new Error(
            `Couldn't find option with id: ${condition.optionId}`
          );
        const dataField = optionField.options.find(
          (df) => df.title === condition.value
        );
        if (!dataField)
          throw new Error(
            `Couldn't find data field with id: ${condition.value}`
          );
        return dataField.isChecked();
    }
  }
}
