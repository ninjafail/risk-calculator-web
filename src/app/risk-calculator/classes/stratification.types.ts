import { Condition } from './condition.types';

export enum Weight {
  L = 0,
  M1 = 1,
  M2 = 2,
  H = 5,
  VH = 100,
}

export type TranslatableText = LanguageString | string;

export interface LanguageString {
  en: string; // default language
  de?: string;
  it?: string;
}

// TODO; Do we really need ids in the current data structure, just use the title as index (should be )
export interface ISelectable {
  id: string;
}

export interface ITitled {
  title: TranslatableText;
}

export interface IWeighted {
  weight: Weight;
}

export interface IField extends ISelectable, ITitled {}
export interface IRecommendation extends ISelectable {
  recommendation: TranslatableText;
}

export interface IOption extends ITitled, IWeighted {}
export interface ITherapyOption extends ISelectable {
  options: IOption[];
  defaultOptionId: string;
}
// TODO: likely rename Slider to Check
// TODO: Add new interface for Select box 
export interface ITherapySlider extends ISelectable, IWeighted {
  default?: boolean;
}
export interface ITherapy extends ITitled {
  optionIds: ITherapyOption[]; // list of option field IDs that are needed
  sliderIds: ITherapySlider[]; // list of slieder field IDs that are needed
  suggestedRecommendations: {
    condition: Condition;
    recommendationIds: string[];
  }[]; // list of recommendation IDs that are used
}

export interface IStratification {
  title: TranslatableText; // name of the stratification'
  subtitle: TranslatableText; // description of the stratification
  therapySlectionLabel: TranslatableText; // label for the therapy selection

  option_fields: IField[];
  slider_fields: IField[];
  recommendations: IRecommendation[];
  therapies: ITherapy[];
}
