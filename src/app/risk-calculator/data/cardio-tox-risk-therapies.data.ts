import { ITherapy, Weight } from '../classes/stratification.types';

// Short Names for Weights
export const L: Weight = Weight.L;
export const M1: Weight = Weight.M1;
export const M2: Weight = Weight.M2;
export const H: Weight = Weight.H;
export const VH: Weight = Weight.VH;

// Therapies
export const therapies: ITherapy[] = [
  {
    title: { en: 'Anthracyclines' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: '< 65', weight: L },
          { title: '65-79', weight: M2 },
          { title: '≥ 80', weight: H },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: '< 50%', weight: H },
          { title: '50-54%', weight: M2 },
          { title: '≥ 55%', weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'vhd', weight: H },
      { id: 'mi', weight: H },
      { id: 'angina', weight: H },
      { id: 'troponin', weight: M1 },
      { id: 'natriuetic', weight: M1 },
      { id: 'hypertension', weight: M1 },
      { id: 'ckd', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'anthracycline', weight: H },
      { id: 'radiotherapy', weight: H },
      { id: 'chemotherapy', weight: M1 },
      { id: 'smoker', weight: M1 },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 1] },
        recommendationIds: [
          'ecg-tte-trop-nt',
          'trop-2-4-6-may',
          'tte-4-may',
          'trop-post-3-may',
          'tte-post-12-rec',
        ],
      },
      {
        condition: { type: 'RANGE', range: [2, 4] },
        recommendationIds: [
          'ecg-tte-trop-nt',
          'trop-2-4-6-should',
          'tte-4-should',
          'tte-trop-post-3-should',
          'tte-post-12-rec',
        ],
      },
      {
        condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        recommendationIds: [
          'ecg-tte-trop-nt',
          'trop-every-rec',
          'tte-2-4-6-rec',
          'tte-post-3-rec',
          'tte-post-12-rec',
        ],
      },
    ],
  },
  {
    title: { en: 'HER2-targeted' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: { en: '< 65' }, weight: L },
          { title: { en: '65-79' }, weight: M2 },
          { title: { en: '≥ 80' }, weight: H },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: { en: '< 50%' }, weight: H },
          { title: { en: '50-54%' }, weight: M2 },
          { title: { en: '≥ 55%' }, weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'vhd', weight: H },
      { id: 'mi', weight: H },
      { id: 'angina', weight: H },
      { id: 'arryth', weight: M2 },
      { id: 'troponin', weight: M2 },
      { id: 'natriuetic', weight: M2 },
      { id: 'hypertension', weight: M1 },
      { id: 'ckd', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'currAnthra', weight: M1 },
      { id: 'anthracycline', weight: M2 },
      { id: 'Trastuz', weight: VH },
      { id: 'radiotherapy', weight: M2 },
      { id: 'smoker', weight: M1 },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 4] },
        recommendationIds: [
          'ecg-tte-trop-nt',
          'tte-every-3-rec',
          'trop-bnp-during-may',
          'trop-bnp-post-12-may',
          'tte-post-12-rec',
        ],
      },
      {
        condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        recommendationIds: [
          'ecg-tte-trop-nt',
          'tte-trop-bnp-every-3-rec',
          'tte-trop-bnp-post-3-rec',
          'tte-trop-bnp-post-12-rec',
        ],
      },
    ],
  },
  {
    title: { en: 'VEGF inhibitors' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: { en: '< 65' }, weight: L },
          { title: { en: '65-74' }, weight: M1 },
          { title: { en: '≥ 75' }, weight: H },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: { en: '< 50%' }, weight: H },
          { title: { en: '50-54%' }, weight: M2 },
          { title: { en: '≥ 55%' }, weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'mi', weight: VH },
      { id: 'angina', weight: VH },
      { id: 'arterial', weight: VH },
      { id: 'thromb', weight: H },
      { id: 'arryth', weight: M2 },
      { id: 'qtc480', weight: H },
      { id: 'qtc450', weight: M2 },
      { id: 'troponin', weight: M1 },
      { id: 'natriuetic', weight: M1 },
      { id: 'hypertension', weight: H },
      { id: 'ckd', weight: M1 },
      { id: 'prot', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'lipid', weight: M1 },
      { id: 'anthracycline', weight: H },
      { id: 'radiotherapy', weight: M1 },
      { id: 'smoker', weight: M1 },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 1] },
        recommendationIds: ['ecg-rec', 'tte-should', 'home-bp', 'no'],
      },
      {
        condition: { type: 'RANGE', range: [2, 4] },
        recommendationIds: [
          'ecg-rec',
          'tte-should',
          'nt-may',
          'tte-nt-every-4-may',
          'tte-every-6-12-should',
        ],
      },
      {
        condition: { type: 'RANGE', range: [5, 99] },
        recommendationIds: [
          'ecg-tte-rec',
          'nt-should',
          'ecg-2-ini-rec',
          'tte-nt-every-3-should',
          'tte-every-6-12-should',
        ],
      },
      {
        condition: { type: 'RANGE', range: [100, Number.POSITIVE_INFINITY] },
        recommendationIds: [
          'ecg-tte-rec',
          'nt-should',
          'ecg-2-ini-rec',
          'tte-4-ini-rec',
          'tte-nt-every-3-should',
          'tte-every-6-12-should',
        ],
      },
    ],
  },
  {
    title: { en: 'BCR-ABL inhibitors' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: { en: '< 60' }, weight: L },
          { title: { en: '60-64' }, weight: M1 },
          { title: { en: '65-74' }, weight: M2 },
          { title: { en: '≥ 75' }, weight: H },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: { en: '< 50%' }, weight: H },
          { title: { en: '50-54%' }, weight: L },
          { title: { en: '≥ 55%' }, weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: H },
      { id: 'arterial', weight: VH },
      { id: 'ankle', weight: H },
      { id: 'pulm', weight: H },
      { id: 'tki', weight: VH },
      { id: 'thromb', weight: M2 },
      { id: 'arryth', weight: M2 },
      { id: 'qtc480', weight: H },
      { id: 'qtc450', weight: M2 },
      { id: 'cvd>20', weight: H },
      { id: 'hypertension', weight: M2 },
      { id: 'ckd', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'lipid', weight: M1 },
      { id: 'famHistThromb', weight: M1 },
      { id: 'smoker', weight: H },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 4] },
        recommendationIds: ['bcr', 'ecg-lipid', 'nilo-ecg', 'nilo-abi'],
      },
      {
        condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        recommendationIds: ['bcr', 'ecg-lipid', 'nilo-ecg', 'nilo-abi', 'dasa'],
      },
    ],
  },
  {
    title: { en: 'Multiple Myeloma therapy' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: { en: '< 65' }, weight: L },
          { title: { en: '65-74' }, weight: M1 },
          { title: { en: '≥ 75' }, weight: H },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: { en: '< 50%' }, weight: H },
          { title: { en: '50-54%' }, weight: M2 },
          { title: { en: '≥ 55%' }, weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'arterial', weight: VH },
      { id: 'thromb', weight: VH },
      { id: 'arryth', weight: M2 },
      { id: 'PiCvTox', weight: VH },
      { id: 'CvTox', weight: H },
      { id: 'lv-hypertrophy', weight: M1 },
      { id: 'amyloidosis', weight: VH },
      { id: 'troponin', weight: M2 },
      { id: 'natriuetic', weight: H },
      { id: 'hypertension', weight: H },
      { id: 'ckd', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'lipid', weight: M1 },
      { id: 'famHistThromb', weight: M1 },
      { id: 'dexamethasone', weight: M1 },
      { id: 'anthracycline', weight: H },
      { id: 'radiotherapy', weight: M1 },
      { id: 'smoker', weight: M1 },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'SELECT', selectId: 'amyloidosis' },
        recommendationIds: [
          'ecg-trop-nt-tte-mri-rec',
          'bp-every-visit-rec',
          'bp-daily-should',
          'bio-3-6-rec',
          'tte-3-should',
        ],
      },
      {
        condition: {
          type: 'AND',
          conditions: [
            {
              type: 'NOT',
              condition: { type: 'SELECT', selectId: 'amyloidosis' },
            },
            { type: 'RANGE', range: [0, 4] },
          ],
        },
        recommendationIds: [
          'ecg-trop-tte-mri-rec',
          'nt-should',
          'bp-every-visit-rec',
          'bp-daily-should',
          'nt-every-carf-bort-should',
          'tte-3-carf-may',
        ],
      },
      {
        condition: {
          type: 'AND',
          conditions: [
            {
              type: 'NOT',
              condition: { type: 'SELECT', selectId: 'amyloidosis' },
            },
            { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
          ],
        },
        recommendationIds: [
          'ecg-trop-nt-tte-mri-rec',
          'bp-every-visit-rec',
          'bp-daily-should',
          'nt-every-carf-bort-should',
          'tte-3-carf-should',
        ],
      },
    ],
  },
  {
    title: { en: 'RAF/MEK inhibitors' },
    optionIds: [
      {
        id: 'age',
        options: [
          { title: { en: '< 65' }, weight: L },
          { title: { en: '≥ 65' }, weight: M1 },
        ],
      },
      {
        id: 'lvef',
        options: [
          { title: { en: '< 50%' }, weight: H },
          { title: { en: '50-54%' }, weight: M2 },
          { title: { en: '≥ 55%' }, weight: L },
        ],
      },
    ],
    sliderIds: [
      { id: 'hf', weight: VH },
      { id: 'vhd', weight: H },
      { id: 'mi', weight: H },
      { id: 'angina', weight: H },
      { id: 'arryth', weight: M1 },
      { id: 'troponin', weight: M2 },
      { id: 'natriuetic', weight: M2 },
      { id: 'hypertension', weight: M2 },
      { id: 'ckd', weight: M1 },
      { id: 'diabetes', weight: M1 },
      { id: 'anthracycline', weight: H },
      { id: 'radiotherapy', weight: M2 },
      { id: 'smoker', weight: M1 },
      { id: 'obesity', weight: M1 },
    ],
    suggestedRecommendations: [
      {
        condition: { type: 'RANGE', range: [0, 4] },
        recommendationIds: [
          'ecg-rec',
          'tte-may',
          'bp-every-visit-weekly-rec',
          'cobi-vem-rec',
        ],
      },
      {
        condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        recommendationIds: [
          'ecg-tte-rec',
          'bp-every-visit-weekly-rec',
          'cobi-vem-rec',
          'tte-4-should',
        ],
      },
    ],
  },
];
