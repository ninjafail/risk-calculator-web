import { Stratification } from '../classes/stratification.classes';
import {
  IRecommendation,
  IField,
  IStratification,
  ITherapy,
  Weight,
} from '../classes/stratification.types';

const L: Weight = Weight.L;
const M1: Weight = Weight.M1;
const M2: Weight = Weight.M2;
const H: Weight = Weight.H;
const VH: Weight = Weight.VH;

export let optionFields: IField[] = [
  {
    id: 'age',
    title: 'Age',
  },
  {
    id: 'lvef',
    title: 'LVEF',
  },
];

export let sliderFields: IField[] = [
  { id: 'hf', title: 'HF/cardiomyopathy/CTRCD' },
  { id: 'vhd', title: 'Severe VHD' },
  { id: 'mi', title: 'MI or PCI or CABG' },
];

export let recommendations: IRecommendation[] = [
  {
    id: 'baseline',
    recommendation: 'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
  },
  {
    id: 'troponin',
    recommendation:
      'Cardiac troponin-Controls at cycles 2,4,6 may be considered',
  },
  { id: 'tte', recommendation: 'TTE-Control at cycle 4 may be considered' },
  {
    id: 'troponin2',
    recommendation:
      'Cardiac troponin-Control 3 months post treatment may be considered',
  },
  {
    id: 'tte2',
    recommendation:
      'TTE-Control follow up 12 months post treatment recommended',
  },
];
export let therapies: ITherapy[] = [
  {
    title: 'Test1',
    optionIds: [
      {
        id: 'age',
        options: [
          { title: '< 65', weight: L },
          { title: '≥ 65', weight: M1 },
        ],
        defaultOptionId: '< 65',
      },
      {
        id: 'lvef',
        options: [
          { title: '< 50%', weight: H },
          { title: '50-54%', weight: M2 },
          { title: '≥ 55%', weight: L },
        ],
        defaultOptionId: '< 50%',
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'vhd', weight: H },
      { id: 'mi', weight: H },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 1] },
        recommendationIds: ['baseline', 'troponin'],
      },
    ],
  },
];

export let stratData: IStratification = {
  title: {
    en: 'Stratification',
    de: 'Stratifikation',
  },
  subtitle: {
    en: 'Subtitle',
    de: 'Untertitel',
  },
  therapySlectionLabel: {
    en: 'Select Therapy',
    de: 'Therapie auswählen',
  },
  option_fields: optionFields,
  slider_fields: sliderFields,
  recommendations: recommendations,
  therapies: therapies,
};

export let TEST_STRAT: Stratification = new Stratification(stratData);
