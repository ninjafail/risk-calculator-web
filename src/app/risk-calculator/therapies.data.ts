import {
  Weight,
  Therapy,
  TherapyInterface,
  createTherapy,
} from './therapy.classes';

// Short Names for Weights
export const L: Weight = Weight.L;
export const M1: Weight = Weight.M1;
export const M2: Weight = Weight.M2;
export const H: Weight = Weight.H;
export const VH: Weight = Weight.VH;

// Therapy Interfaces (the raw data), which need to registered in therapiesRawData at the bottom
let therapyA: TherapyInterface = {
  name: 'Anthracyclines',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 65', weight: L },
        { name: '65-79', weight: M2 },
        { name: '≥ 80', weight: H },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: VH },
    { name: 'Severe VHD', weight: H },
    { name: 'MI or PCI or CABG', weight: H },
    { name: 'Stable angina', weight: H },
    { name: 'Elevated Baseline cardiac Troponin', weight: M1 },
    { name: 'Elevated Baseline Natriuetic Peptides', weight: M1 },
    { name: 'Hypertension', weight: M1 },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Previous exposure to Anthracycline', weight: H },
    {
      name: 'Previous exposure to radio-therapy (left chest/mediastinum)',
      weight: H,
    },
    { name: 'Previous exposure to other chemotherapy', weight: M1 },
    { name: 'Current smoker or significant smoking history', weight: M1 },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 1] },
      recommendations: [
        'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        'Cardiac troponin-Controls at cycles 2,4,6 may be considered',
        'TTE-Control at cycle 4 may be considered',
        'Cardiac troponin-Control 3 months post treatment may be considered',
        'TTE-Control follow up 12 months post treatment recommended',
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: [
        'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        'Cardiac troponin-Controls at cycles 2,4,6 should be considered',
        'TTE-Control at cycle 4 should be considered',
        'TTE-& cardiac troponin-Control 3 months post treatment should be considered',
        'TTE-Control follow up 12 months post treatment recommended',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        'Cardiac troponin-Controls every cycle recommended',
        'TTE-Control at cycles 2,4,6 recommended',
        'TTE-& cardiac troponin-Control 3 months post treatment recommended',
        'TTE-Control 12 months post treatment recommended',
      ],
    },
  ],
};

let therapyB: TherapyInterface = {
  name: 'HER2-targeted ',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 65', weight: L },
        { name: '65-79', weight: M2 },
        { name: '≥ 80', weight: H },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: VH },
    { name: 'Severe VHD', weight: H },
    { name: 'MI or PCI or CABG', weight: H },
    { name: 'Stable angina', weight: H },
    { name: 'Arrhythmia', weight: M2 },
    { name: 'Elevated Baseline cardiac Troponin', weight: M2 },
    { name: 'Elevated Baseline Natriuetic Peptides', weight: M2 },
    { name: 'Hypertension', weight: M1 },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Current threatment includes anthracyclines before', weight: M1 },
    { name: 'Previous exposure to Anthracycline', weight: M2 },
    { name: 'Previous exposure to Trastuzumab', weight: VH },
    {
      name: 'Previous exposure to radio-therapy (left chest/mediastinum)',
      weight: M2,
    },
    { name: 'Current smoker or significant smoking history', weight: M1 },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 4] },
      recommendations: [
        'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        'TTE-Control every 3 months during treatment recommended',
        'Cardiac troponin/BNP-Controls during treatment may be considered',
        'Cardiac troponin/BNP-Controls 12 months post treatment may be considered',
        'TTE-Control 12 months post treatment recommended',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        'TTE/cardiac troponin/BNP-Controls every 3 months during treatment recommended',
        'TTE/cardiac troponin/BNP-Controls 3 months post treatment recommended',
        'TTE/cardiac troponin/BNP-Controls 12 months post treatment recommended',
      ],
    },
  ],
};

let therapyC: TherapyInterface = {
  name: 'VEGF inhibitors',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 65', weight: L },
        { name: '65-74', weight: M1 },
        { name: '≥ 75', weight: H },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: VH },
    { name: 'MI or PCI or CABG', weight: VH },
    { name: 'Stable angina', weight: VH },
    { name: 'Arterial vascular disease', weight: VH },
    { name: 'Venous thrombosis (DVT/PE)', weight: H },
    { name: 'Arrhythmia', weight: M2 },
    { name: 'QTc ≥ 480 ms', weight: H },
    {
      name: '450 ≤ QTc < 480 ms (men); 460 ≤ QTc < 480 ms (women)',
      weight: M2,
    },
    { name: 'Elevated baseline cardiac Troponin', weight: M1 },
    { name: 'Elevated baseline natriuetic peptides', weight: M1 },
    { name: 'Hypertension', weight: H },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Proteinuria', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Hyperlipidaemia', weight: M1 },
    { name: 'Previous exposure to Anthracycline', weight: H },
    {
      name: 'Previous exposure to radio-therapy (left chest/mediastinum)',
      weight: M1,
    },
    { name: 'Current smoker or significant smoking history', weight: M1 },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 1] },
      recommendations: [
        'Baseline ECG recommended',
        'Baseline TTE should be considered',
        'Home BP monitoring is recommended daily during the first cycle, after each increase of anticancer treatment dose, and every 2–3 weeks thereafter',
        'No scheduled follow ups necessary'
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: [
        'Baseline ECG recommended,',
        'Baseline TTE should be considered',
        'Baseline NT-proBNP may be considered',
        'TTE/NT-proBNP-Control every 4 months during treatment may be considered',
        'TTE-Control every 6-12 months during treatment should be considered',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, 99] },
      recommendations: [
        'Baseline ECG, TTE recommended',
        'Baseline NT-proBNP should be considered',
        'ECG-Control 2 weeks after intitiation of treatment and when increasing the dose recommended',
        'TTE/NT-proBNP-Controls every 3 months during treatment should be considered',
        'TTE-Control every 6-12 months during treatment should be considered',
      ],
    },
    {
      condition: { type: 'RANGE', range: [100, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG, TTE recommended',
        'Baseline NT-proBNP should be considered',
        'ECG-Control 2 weeks after intitiation of treatment and when increasing the dose recommended',
        'TTE-Control 4 weeks after intitiation of treatment recommended',
        'TTE/NT-proBNP-Controls every 3 months during treatment should be considered',
        'TTE-Control every 6-12 months during treatment should be considered',
      ],
    },
  ],
};

let therapyD: TherapyInterface = {
  name: 'BCR-ABL inhibitors',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 60', weight: L },
        { name: '60-64', weight: M1 },
        { name: '65-74', weight: M2 },
        { name: '≥ 75', weight: H },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: L },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: H },
    { name: 'Arterial vascular disease', weight: VH },
    { name: 'Abnormal ankle-brachial pressure index', weight: H },
    { name: 'Pulmonary hypertension', weight: H },
    { name: 'Arterial thrombosis with TKI', weight: VH },
    { name: 'Venous thrombosis (DVT/PE)', weight: M2 },
    { name: 'Arrhythmia', weight: M2 },
    { name: 'QTc ≥ 480 ms', weight: H },
    {
      name: '450 ≤ QTc < 480 ms (men); 460 ≤ QTc < 480 ms (women)',
      weight: M2,
    },
    { name: 'CVD 10-year risk score > 20%', weight: H },
    { name: 'Hypertension', weight: M2 },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Hyperlipidaemia', weight: M1 },
    { name: 'Family history of thrombophilia', weight: M1 },
    { name: 'Current smoker or significant smoking history', weight: H },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 4] },
      recommendations: [
        'BCR-ABL-TKI',
        'Baseline ECG, Lipid-profile/HbA1c-Control and TTE recommended',
        'Nilotinib/Ponatinib: ECG, Lipid-profile/HbA1c-Control every 3 months during treatment recommended',
        'Nilotinib/Ponatinib: Baseline ABI-Control and every 6 months during treatment may be considered',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'BCR-ABL-TKI',
        'Baseline ECG, Lipid-profile/HbA1c-Control and TTE recommended',
        'Nilotinib/Ponatinib: ECG, Lipid-profile/HbA1c-Control every 3 months during treatment recommended',
        'Nilotinib/Ponatinib: Baseline ABI-Control and every 6 months during treatment may be considered',
        'Dasatinib/Posatinib: TTE-Control every 3 months should be considered',
      ],
    },
  ],
};

let therapyE: TherapyInterface = {
  name: 'Multiple Myeloma therapy',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 65', weight: L },
        { name: '65-74', weight: M1 },
        { name: '≥ 75', weight: H },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: VH },
    { name: 'Arterial vascular disease', weight: VH },
    { name: 'Venous thrombosis (DVT/PE)', weight: VH },
    { name: 'Arrhythmia', weight: M2 },
    { name: 'Prior PI CV toxicity', weight: VH },
    { name: 'Prior IMiD CV toxicity', weight: H },
    { name: 'LV hypertrophy ', weight: M1 },
    { name: 'Cardiac amyloidosis', weight: VH },
    { name: 'Elevated baseline cardiac Troponin', weight: M2 },
    { name: 'Elevated baseline natriuetic peptides', weight: H },
    { name: 'Hypertension', weight: H },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Hyperlipidaemia', weight: M1 },
    { name: 'Family history of thrombophilia', weight: M1 },
    { name: 'Currently Dexamethasone >160 mg/month', weight: M1 },
    { name: 'Previous exposure to Anthracycline', weight: H },
    {
      name: 'Previous exposure to radio-therapy (left chest/mediastinum)',
      weight: M1,
    },
    { name: 'Current smoker or significant smoking history', weight: M1 },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'SELECT', select: 'Cardiac amyloidosis' },
      recommendations: [
        'Baseline ECG, cardiac troponin, NT-proBNP, TTE and cardiac-MRI recommended',
        'Blood pressure monitoring at every clinical visit during treatment recommended',
        'Blood pressure monitoring daily at home during treatment should be considered',
        'Biomarker every 3-6 months during treatment recommended',
        'TTE every 3 cycles should be considered',
      ],
    },
    {
      condition: {
        type: 'AND',
        conditions: [
          {
            type: 'NOT',
            condition: { type: 'SELECT', select: 'Cardiac amyloidosis' },
          },
          { type: 'RANGE', range: [0, 4] },
        ],
      },
      recommendations: [
        'Baseline ECG, cardiac troponin, TTE and cardiac-MRI recommended',
        'Baseline NT-proBNP should be considered',
        'Blood pressure monitoring at every clinical visit during treatment recommended',
        'Blood pressure monitoring daily at home during treatment should be considered',
        'NT-proBNP every cycle during the first 6 cycles under Carfilzomib or Bortezomib should be considered',
        'TTE every 3 cycles under Carfilzomib may be considered',
      ],
    },
    {
      condition: {
        type: 'AND',
        conditions: [
          {
            type: 'NOT',
            condition: { type: 'SELECT', select: 'Cardiac amyloidosis' },
          },
          { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        ],
      },
      recommendations: [
        'Baseline ECG, cardiac troponin, NT-proBNP, TTE and cardiac-MRI recommended',
        'Blood pressure monitoring at every clinical visit during treatment recommended',
        'Blood pressure monitoring daily at home during treatment should be considered',
        'NT-proBNP every cycle during the first 6 cycles under Carfilzomib or Bortezomib should be considered',
        'TTE every 3 cycles under Carfilzomib should be considered',
      ],
    },
  ],
};

let therapyF: TherapyInterface = {
  name: 'RAF/MEK inhibitors',
  option_fields: [
    {
      name: 'Age',
      options: [
        { name: '< 65', weight: L },
        { name: '≥ 65', weight: M1 },
      ],
    },
    {
      name: 'LVEF',
      options: [
        { name: '< 50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '≥ 55%', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'HF/cardiomyopathy/CTRCD', weight: VH },
    { name: 'Severe VHD', weight: H },
    { name: 'MI or PCI or CABG', weight: H },
    { name: 'Stable angina', weight: H },
    { name: 'Arrhythmia', weight: M1 },
    { name: 'Elevated Baseline cardiac Troponin', weight: M2 },
    { name: 'Elevated Baseline Natriuetic Peptides', weight: M2 },
    { name: 'Hypertension', weight: M2 },
    { name: 'Chronic kidney disease', weight: M1 },
    { name: 'Diabetes mellitus', weight: M1 },
    { name: 'Previous exposure to Anthracycline', weight: H },
    {
      name: 'Previous exposure to radio-therapy (left chest/mediastinum)',
      weight: M2,
    },
    { name: 'Current smoker or significant smoking history', weight: M1 },
    { name: 'Obesity (BMI>30kg/m2)', weight: M1 },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 4] },
      recommendations: [
        'Baseline ECG recommended',
        'Baseline TTE may be considered',
        'Blood pressure monitoring at each clinical visit and weekly outpatient monitoring during the first 3 months of treatment and monthly thereafter recommended',
        'Cobimetinib/Vemurafenib: ECG 2 & 4 weeks after initiation of treatment and every 3 months thereafter recommended',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG & TTE recommended',
        'Blood pressure monitoring at each clinical visit and weekly outpatient monitoring during the first 3 months of treatment and monthly thereafter recommended',
        'Cobimetinib/Vemurafenib: ECG 2 & 4 weeks after initiation of treatment and every 3 months thereafter recommended',
        'TTE-Control every 4 months should be considered',
      ],
    },
  ],
};

let therapiesRawData: TherapyInterface[] = [
  therapyA,
  therapyB,
  therapyC,
  therapyD,
  therapyE,
  therapyF,
];
export let THERAPIES_DATA: Therapy[] = therapiesRawData.map((t) =>
  createTherapy(t)
);
