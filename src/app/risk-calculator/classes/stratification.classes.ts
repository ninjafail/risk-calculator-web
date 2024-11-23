import { Condition } from './condition.types';
import {
  IRecommendation,
  IField,
  IStratification,
  ITherapy,
  TranslatableText,
  Weight,
  IOption,
} from './stratification.types';

export class CheckableWeightedField {
  title: TranslatableText;
  protected weight: Weight = Weight.L;
  protected checked: boolean = false;
  protected default: boolean = false;

  constructor(
    title: TranslatableText,
    weight: Weight,
    defaultChecked: boolean
  ) {
    this.title = title;
    this.weight = weight;
    this.default = defaultChecked;
  }

  check() {
    this.checked = true;
  }

  uncheck() {
    this.checked = false;
  }

  reset() {
    this.checked = this.default;
  }

  isChecked() {
    return this.checked;
  }

  getWeight(): number {
    if (this.checked) return this.weight.valueOf();
    return 0;
  }
}

export class SliderField extends CheckableWeightedField {
  id: string;

  constructor(sf: IField, weight: Weight, defaultChecked = false) {
    super(sf.title, weight, defaultChecked);
    this.id = sf.id;
  }
}

export class OptionField {
  id: string;
  title: TranslatableText;
  options: CheckableWeightedField[];
  defaultOptionId: string;

  constructor(of: IField, options: IOption[], defaultOptionId: string) {
    this.id = of.id;
    this.title = of.title;
    this.options = options.map((cwf) => {
      const isDefault = defaultOptionId === cwf.title;
      return new CheckableWeightedField(cwf.title, cwf.weight, isDefault);
    });
    this.defaultOptionId = defaultOptionId;
  }

  getWeight(): number {
    for (let option of this.options) {
      if (option.isChecked()) {
        return option.getWeight();
      }
    }
    return 0;
  }
}

export class Therapy {
  title: TranslatableText;
  option_fields: OptionField[];
  slider_fields: SliderField[];
  suggestedRecommendations: {
    condition: Condition;
    recommendations: TranslatableText[];
  }[];

  constructor(
    title: TranslatableText,
    option_fields: OptionField[],
    slider_fields: SliderField[],
    recommendations: {
      condition: Condition;
      recommendations: TranslatableText[];
    }[]
  ) {
    this.title = title;
    this.option_fields = option_fields;
    this.slider_fields = slider_fields;
    this.suggestedRecommendations = recommendations;
  }
}

export class Stratification {
  title: TranslatableText;
  subtitle: TranslatableText;
  therapySelectionLabel: TranslatableText;
  data: {
    slider_fields: { [id: string]: IField };
    option_fields: { [id: string]: IField };
    recommendations: { [id: string]: IRecommendation };
  } = {
    slider_fields: {},
    option_fields: {},
    recommendations: {},
  };
  therapies: Therapy[];

  constructor(s: IStratification) {
    this.title = s.title;
    this.subtitle = s.subtitle;
    this.therapySelectionLabel = s.therapySlectionLabel;

    s.slider_fields.forEach((sf) => {
      this.data.slider_fields[sf.id] = sf;
    });
    s.option_fields.forEach((of) => {
      this.data.option_fields[of.id] = of;
    });
    s.recommendations.forEach((r) => {
      this.data.recommendations[r.id] = r;
    });

    this.therapies = s.therapies.map((t) => createTherapy(t, this.data));
  }
}

export function createTherapy(
  t: ITherapy,
  data: {
    slider_fields: { [id: string]: IField };
    option_fields: { [id: string]: IField };
    recommendations: { [id: string]: IRecommendation };
  }
): Therapy {
  // TODO: validate inputs (i.e. ids need be unique, references need to exist)
  return new Therapy(
    t.title,
    t.optionIds.map((tOpt) => {
      try {
        return new OptionField(
          data.option_fields[tOpt.id],
          tOpt.options,
          tOpt.defaultOptionId
        );
      } catch (e) {
        console.error('OptionField not found:', tOpt.id, e);
        return new OptionField({ id: '', title: { en: '', de: '' } }, [], '');
      }
    }),
    t.sliderIds.map((tSf) => {
      try {
        const defaultChecked: boolean = tSf.default ?? false;
        return new SliderField(
          data.slider_fields[tSf.id],
          tSf.weight,
          defaultChecked
        );
      } catch (e) {
        console.error('SliderField not found:', tSf.id, e);
        return new SliderField({ id: '', title: { en: '', de: '' } }, Weight.L);
      }
    }),
    t.suggestedRecommendations.map((sr) => {
      return {
        condition: sr.condition,
        recommendations: sr.recommendationIds.map(
          (id) => data.recommendations[id].recommendation
        ),
      };
    })
  );
}
