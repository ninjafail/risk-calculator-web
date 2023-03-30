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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '>=55%', weight: L },
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
        'Baseline EKG, TTE, cTnT/NT-proBNP empfohlen',
        'TnT-Kontrollen zu Zyklus 2,4,6 möglich',
        'TTE-Kontrolle zu Zyklus 4 möglich',
        'TnT-Kontrolle 3 Monate nach Abschluss der Therapie möglich',
        'Wiedervorstellung zur TTE-Kontrolle 12 Monate nach Therapie empfohlen',
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: [
        'Baseline EKG, TTE, cTnT/NT-proBNP empfohlen',
        'TnT-Kontrollen zu Zyklus 2,4,6 sinnvoll',
        'TTE-Kontrolle zu Zyklus 4 sinnvoll',
        'TTE-& TnT-Kontrolle 3 Monate nach Abschluss der Therapie sinnvoll',
        'Wiedervorstellung zur TTE-Kontrolle 12 Monate nach Therapie empfohlen',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG, TTE, cTnT/NT-proBNP empfohlen',
        'TnT-Kontrollen zu jedem Zyklus empfohlen',
        'TTE-Kontrolle zu jedem zweiten Zyklus empfohlen',
        'TTE-& TnT-Kontrolle 3 Monate nach Abschluss der Therapie empfohlen',
        'TTE-Kontrolle 12 Monate nach Therapie empfohlen',
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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '>=55%', weight: L },
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
        'Anti-HER-2-Therapie Low/Medium Risk Group',
        'Baseline ECG, TTE, cTnT/NT-proBNP empfohlen',
        'TTE-Kontrolle alle 3 Monate während Therapie empfohlen',
        'TnT/BNP-Kontrollen als Therapiemonitoring möglich',
        'TTE-Kontrolle 12 Monate nach Therapie empfohlen',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline ECG, TTE, cTnT/NT-proBNP empfohlen',
        'TTE/Biomarker-Kontrolle alle 3 Monate während Therapie empfohlen',
        'TTE/Biomarker-Kontrolle 3 Monate nach Abschluss der Therapie empfohlen',
        'TTE/Biomarker-Kontrolle 12 Monate nach Therapie empfohlen',
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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '>=55%', weight: L },
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
        'Baseline EKG, TTE empfohlen',
        'Bei unauffälligem Verlauf keine weitere Wiedervorstellung notwendig',
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: [
        'Baseline EKG, TTE, NT-proBNP empfohlen',
        'TTE/NT-proBNP-Kontrolle alle 4 Monate während Therapie möglich',
        'Im Anschluss ist eine TTE-Kontrolle alle 6-12 Monate während Therapie sinnvoll',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, 99] },
      recommendations: [
        'Baseline EKG, TTE, NT-proBNP empfohlen',
        'EKG-Kontrolle 2 Wochen nach Therapiebeginn und bei Dosissteigerung empfohlen',
        'TTE/NT-proBNP-Kontrollen alle 3 Monate während Therapie sinnvoll',
        'Im Anschluss ist eine TTE-Kontrolle alle 6-12 Monate während Therapie sinnvoll',
      ],
    },
    {
      condition: { type: 'RANGE', range: [100, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline EKG, TTE, NT-proBNP empfohlen',
        'EKG-Kontrolle 2 Wochen nach Therapiebeginn und bei Dosissteigerung empfohlen',
        'TTE/NT-proBNP-Kontrolle 4 Wochen nach Therapiebeginn sinnvoll',
        'TTE/NT-proBNP-Kontrollen alle 3 Monate während Therapie sinnvoll',
        'Im Anschluss ist eine TTE-Kontrolle alle 6-12 Monate während Therapie sinnvoll',
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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: L },
        { name: '>=55%', weight: L },
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
        'Baseline EKG, Lipid-Profil/HbA1c-Messung und TTE empfohlen',
        'Nilotinib/Ponatinib: EKG, Lipid-Profil/HbA1c-Messung alle 3 Monate unter Therapie empfohlen',
        'Nilotinib/Ponatinib: ABI-Messung Baseline sowie alle 6 Monate unter Therapie möglich',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'BCR-ABL-TKI',
        'Baseline EKG, Lipid-Profil/HbA1c-Messung und TTE empfohlen',
        'Nilotinib/Ponatinib: EKG, Lipid-Profil/HbA1c-Messung alle 3 Monate unter Therapie empfohlen',
        'Nilotinib/Ponatinib: ABI-Messung Baseline sowie alle 6 Monate unter Therapie möglich',
        'Dasatinib/Posatinib: TTE-Kontrolle alle 3 Monate sinnvoll',
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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '>=55%', weight: L },
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
    // if C_Amyloidose.Checked
    /* 'Proteasome Inhibitor + kardiale Amyloidose'
        Baseline EKG, TnT, NT-proBNP, TTE und Kardio-MRT empfohlen
        Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen
        Biomarker alle 3-6 Monate unter Therapie empfohlen
        TTE alle 3 Zyklen sinnvoll
    */
    // else range
    {
      condition: { type: 'SELECT', select: 'Cardiac amyloidosis' },
      recommendations: [
        'Proteasome Inhibitor + kardiale Amyloidose',
        'Baseline EKG, TnT, NT-proBNP, TTE und Kardio-MRT empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'Biomarker alle 3-6 Monate unter Therapie empfohlen',
        'TTE alle 3 Zyklen sinnvoll',
      ],
    },
    {
      condition: {
        type: 'AND',
        conditions: [
          { type: 'NOT', condition: { type: 'SELECT', select: 'Cardiac amyloidosis' } },
          { type: 'RANGE', range: [0, 4] },
        ],
      },
      recommendations: [
        'Baseline EKG, NT-proBNP und TTE empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'NT-proBNP jeden Zyklus während der ersten 6 Zyklen unter Carfilzomib oder Bortezomib sinnvoll',
        'TTE alle 3 Zyklen unter Carfilzomib möglich',
      ],
    },
    {
      condition: {
        type: 'AND',
        conditions: [
          { type: 'NOT', condition: { type: 'SELECT', select: 'Cardiac amyloidosis' } },
          { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
        ],
      },
      recommendations: [
        'Baseline EKG, NT-proBNP und TTE empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'NT-proBNP jeden Zyklus während der ersten 6 Zyklen unter Carfilzomib oder Bortezomib sinnvoll',
        'TTE alle 3 Zyklen unter Carfilzomib möglich',
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
        { name: '<50%', weight: H },
        { name: '50-54%', weight: M2 },
        { name: '>=55%', weight: L },
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
      condition: { type: 'RANGE', range: [0, 1] },
      recommendations: [
        'Baseline EKG empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'Cobimetinib/Vemurafenib: EKG nach 2 & 4 Wochen nach Therapiestart, sowie danach alle 3 Monate empfohlen',
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: [
        'Baseline EKG & TTE empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'Cobimetinib/Vemurafenib: EKG nach 2 & 4 Wochen nach Therapiestart, sowie danach alle 3 Monate empfohlen',
      ],
    },
    {
      condition: { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
      recommendations: [
        'Baseline EKG & TTE empfohlen',
        'Blutdruck-Messung bei jedem Besuch sowie häusliche Messungen unter Therapie empfohlen',
        'Cobimetinib/Vemurafenib: EKG nach 2 & 4 Wochen nach Therapiestart, sowie danach alle 3 Monate empfohlen',
        'TTE-Kontrolle alle 6-12 Monate sinnvoll',
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
