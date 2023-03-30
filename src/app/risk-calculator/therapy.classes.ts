

// number range representing min and max
export type NumberRange = [number, number];

// Conditions as data
export type Condition =
  | AndCondition
  | ORCondition
  | NOTCondition
  | Range
  | Option
  | Select;
export interface AndCondition {
  type: 'AND';
  conditions: [Condition, Condition];
}
export interface ORCondition {
  type: 'OR';
  conditions: [Condition, Condition];
}
export interface NOTCondition {
  type: 'NOT';
  condition: Condition;
}
export interface Range {
  type: 'RANGE';
  range: NumberRange;
}
export interface Option {
  type: 'OPTION';
  value: any;
  option: string;
}
export interface Select {
  type: 'SELECT';
  select: string;
}

// maps a list of recommendations to a
export type Recommendation = {
  condition: Condition;
  recommendations: string[];
};


export enum Weight {
  L = 0,
  M1 = 1,
  M2 = 2,
  H = 5,
  VH = 100,
}

export interface DataFieldInterface {
  name: string;
  weight: number;
}

export interface OptionFieldInterface {
  name: string;
  options: DataFieldInterface[];
}

export interface TherapyInterface {
  // Therapy name
  name: string;
  // recommendations for therapy and calculated risk
  recommendations: Recommendation[];
  // risk factors with more than 2 options represented as radio buttons
  option_fields: OptionFieldInterface[];
  // risk factors with a binary yes/no option
  slider_fields: DataFieldInterface[];
}

export class DataField {
  name: string = '';
  private weight: Weight = Weight.L;
  private checked: boolean = false;

  constructor(name: string, weight: Weight) {
    this.name = name;
    this.weight = weight;
  }

  check() {
    this.checked = true;
  }

  uncheck() {
    this.checked = false;
  }

  isChecked() {
    return this.checked
  }

  getWeight(): number {
    if (this.checked) return this.weight.valueOf();
    return 0;
  }
}

export class OptionField {
  name: string;
  options: DataField[];

  constructor(name: string, options: DataField[]) {
    this.name = name;
    this.options = options;
  }
}

export class Therapy {
  name: string;
  option_fields: OptionField[];
  slider_fields: DataField[];
  recommendations: Recommendation[];

  constructor(
    name: string,
    option_fields: OptionField[],
    slider_fields: DataField[],
    recommendations: Recommendation[]
  ) {
    this.name = name;
    this.option_fields = option_fields;
    this.slider_fields = slider_fields;
    this.recommendations = recommendations;
  }
}

export function createDataField(df: DataFieldInterface): DataField {
  return new DataField(df.name, df.weight);
}

export function createDataFields(dfArr: DataFieldInterface[]): DataField[] {
  return dfArr.map((df) => createDataField(df));
}

export function createOptionField(of: OptionFieldInterface): OptionField {
  return new OptionField(of.name, createDataFields(of.options));
}

export function createOptionFields(
  ofArr: OptionFieldInterface[]
): OptionField[] {
  return ofArr.map((of) => createOptionField(of));
}

export function createTherapy(t: TherapyInterface): Therapy {
  return new Therapy(
    t.name,
    createOptionFields(t.option_fields),
    createDataFields(t.slider_fields),
    t.recommendations
  );
}
