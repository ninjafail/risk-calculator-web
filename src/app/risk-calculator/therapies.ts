import { Weight } from "./risk-calc-weights.enum";

const L: Weight = Weight.L;
const M1: Weight = Weight.M1;
const M2: Weight = Weight.M2;
const H: Weight = Weight.H;
const VH: Weight = Weight.VH;

export interface DataField {
  name: string;
  weight: Weight;
}

export interface OptionField {
  name: string;
  options: DataField[];
}

export interface Therapy {
  name: string,
  option_fields: OptionField[]
  slider_fields: DataField[]
}

let therapyAOptionFields: OptionField[] = [
  {
    name: "Age",
    options: [
      {name: "0-20", weight: L},
      {name: "1-20", weight: M1},
      {name: "21-60", weight: L}
    ],
  },
  {
    name: "LVEF",
    options: [
      {name: "<50%", weight: L},
      {name: "50-75%", weight: L},
      {name: "<50%", weight: L}
    ]
  }];

export let therapyA: Therapy = {
  name: "Adracycline",
  option_fields: therapyAOptionFields,
  slider_fields: [
    { name: "Elevated Baseline", weight: L },
    { name: "Elevated Baseline 2", weight: M2 },
    { name: "Elevated Baseline 3", weight: VH }
  ]
}

export let therapyB: Therapy = {
  name: "Bdracycline",
  option_fields: [
    {
      name: "Age",
      options: [
        {name: "0-20", weight: M1},
        {name: "1-20", weight: M2},
        {name: "21-60", weight: H}
      ],
    },
    {
      name: "LVEF",
      options: [
        {name: "<50%", weight: L},
        {name: "50-75%", weight: H},
        {name: "76-85%", weight: L},
        {name: "<85%", weight: L}
      ]
    },
  ],
  slider_fields: [
    { name: "Elevated Baseline", weight: L },
    { name: "Elevated Baseline 2", weight: M2 },
    { name: "Elevated Baseline 3", weight: VH }
  ]
}
