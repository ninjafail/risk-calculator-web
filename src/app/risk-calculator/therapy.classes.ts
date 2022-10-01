export enum Weight {
  L = 0,
  M1 = 1,
  M2 = 2,
  H = 5,
  VH = 100,
}

export interface DataFieldInterface {
  name: string;
  weight: Weight;
}

export interface OptionFieldInterface {
  name: string;
  options: DataFieldInterface[];
}

export interface TherapyInterface {
  name: string;
  option_fields: OptionFieldInterface[];
  slider_fields: DataFieldInterface[];
}


export class DataField implements DataFieldInterface{
  name: string = "";
  weight: Weight = Weight.L;
  isChecked: boolean = false;

  constructor(name: string, weight: Weight) {
    this.name = name;
    this.weight = weight;
  }

  check() {
    this.isChecked = true;
  }

  uncheck() {
    this.isChecked = false;
  }

  getWeight(): number {
    if (this.isChecked) return this.weight.valueOf()
    return 0
  }
}

export class OptionField implements OptionFieldInterface {
  name: string;
  options: DataField[];

  constructor(name: string, options: DataField[]) {
    this.name = name;
    this.options = options;
  }
}

export class Therapy implements TherapyInterface{
  name: string;
  option_fields: OptionField[];
  slider_fields: DataField[];

  constructor(name: string, option_fields: OptionField[], slider_fields: DataField[]) {
    this.name = name;
    this.option_fields = option_fields;
    this.slider_fields = slider_fields;
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

export function createOptionFields(ofArr: OptionFieldInterface[]): OptionField[] {
  return ofArr.map((of) => createOptionField(of));
}

export function createTherapy(t: TherapyInterface): Therapy {
  return new Therapy(t.name, createOptionFields(t.option_fields), createDataFields(t.slider_fields))
}
