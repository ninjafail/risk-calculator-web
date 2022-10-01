import { Weight, Therapy, TherapyInterface, createTherapy } from "./therapy.classes";

// Short Names for Weights
const L: Weight = Weight.L;
const M1: Weight = Weight.M1;
const M2: Weight = Weight.M2;
const H: Weight = Weight.H;
const VH: Weight = Weight.VH;


// Therapy Interfaces (the raw data), which need to registered in therapiesRawData at the bottom
let therapyA: TherapyInterface = {
  name: "Anthracyclines",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 65", weight: L},
          {name: "65-79", weight: M2},
          {name: "≥ 80", weight: H}
        ],
    },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: M2},
          {name: ">=55%", weight: L}
        ]
      }
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: VH},
    { name: "Severe VHD", weight: H },
    { name: "MI or PCI or CABG", weight: H },
    { name: "Stable angina", weight: H },
    { name: "Elevated Baseline cardiac Troponin", weight: M1 },
    { name: "Elevated Baseline Natriuetic Peptides", weight: M1 },
    { name: "Hypertension", weight: M1 },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Previous exposure to Anthracycline", weight: H },
    { name: "Previous exposure to radio-therapy (left chest/mediastinum)", weight: H },
    { name: "Previous exposure to other chemotherapy", weight: M1 },
    { name: "Current smoker or significant smoking history", weight: M1 },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}

let therapyB: TherapyInterface = {
  name: "HER2-targeted ",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 65", weight: L},
          {name: "65-79", weight: M2},
          {name: "≥ 80", weight: H}
        ],
    },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: M2},
          {name: ">=55%", weight: L}
        ]
    },
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: VH},
    { name: "Severe VHD", weight: H },
    { name: "MI or PCI or CABG", weight: H },
    { name: "Stable angina", weight: H },
    { name: "Arrhythmia", weight: M2 },
    { name: "Elevated Baseline cardiac Troponin", weight: M2 },
    { name: "Elevated Baseline Natriuetic Peptides", weight: M2 },
    { name: "Hypertension", weight: M1 },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Current threatment includes anthracyclines before", weight: M1 },
    { name: "Previous exposure to Anthracycline", weight: M2 },
    { name: "Previous exposure to Trastuzumab", weight: VH },
    { name: "Previous exposure to radio-therapy (left chest/mediastinum)", weight: M2 },
    { name: "Current smoker or significant smoking history", weight: M1 },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}

let therapyC: TherapyInterface = {
  name: "VEGF inhibitors",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 65", weight: L},
          {name: "65-74", weight: M1},
          {name: "≥ 75", weight: H}
        ],
    },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: M2},
          {name: ">=55%", weight: L}
        ]
    },
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: VH},
    { name: "MI or PCI or CABG", weight: VH },
    { name: "Stable angina", weight: VH },
    { name: "Arterial vascular disease", weight: VH },
    { name: "Venous thrombosis (DVT/PE)", weight: H },
    { name: "Arrhythmia", weight: M2 },
    { name: "QTc ≥ 480 ms", weight: H },
    { name: "450 ≤ QTc < 480 ms (men); 460 ≤ QTc < 480 ms (women)", weight: M2 },
    { name: "Elevated baseline cardiac Troponin", weight: M1 },
    { name: "Elevated baseline natriuetic peptides", weight: M1 },
    { name: "Hypertension", weight: H },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Proteinuria", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Hyperlipidaemia", weight: M1 },
    { name: "Previous exposure to Anthracycline", weight: H },
    { name: "Previous exposure to radio-therapy (left chest/mediastinum)", weight: M1 },
    { name: "Current smoker or significant smoking history", weight: M1 },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}

let therapyD: TherapyInterface = {
  name: "BCR-ABL inhibitors",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 60", weight: L},
          {name: "60-64", weight: M1},
          {name: "65-74", weight: M2},
          {name: "≥ 75", weight: H}
        ],
    },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: L},
          {name: ">=55%", weight: L}
        ]
    },
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: H},
    { name: "Arterial vascular disease", weight: VH },
    { name: "Abnormal ankle-brachial pressure index", weight: H },
    { name: "Pulmonary hypertension", weight: H },
    { name: "Arterial thrombosis with TKI", weight: VH },
    { name: "Venous thrombosis (DVT/PE)", weight: M2 },
    { name: "Arrhythmia", weight: M2 },
    { name: "QTc ≥ 480 ms", weight: H },
    { name: "450 ≤ QTc < 480 ms (men); 460 ≤ QTc < 480 ms (women)", weight: M2 },
    { name: "CVD 10-year risk score > 20%", weight: H },
    { name: "Hypertension", weight: M2 },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Hyperlipidaemia", weight: M1 },
    { name: "Family history of thrombophilia", weight: M1 },
    { name: "Current smoker or significant smoking history", weight: H },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}


let therapyE: TherapyInterface = {
  name: "Multiple myeloma ",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 65", weight: L},
          {name: "65-74", weight: M1},
          {name: "≥ 75", weight: H}
        ],
    },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: M2},
          {name: ">=55%", weight: L}
        ]
    },
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: VH},
    { name: "Arterial vascular disease", weight: VH },
    { name: "Venous thrombosis (DVT/PE)", weight: VH },
    { name: "Arrhythmia", weight: M2 },
    { name: "Prior PI CV toxicity", weight: VH },
    { name: "Prior IMiD CV toxicity", weight: H },
    { name: "LV hypertrophy ", weight: M1 },
    { name: "Cardiac amyloidosis", weight: VH },
    { name: "Elevated baseline cardiac Troponin", weight: M2 },
    { name: "Elevated baseline natriuetic peptides", weight: H },
    { name: "Hypertension", weight: H },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Hyperlipidaemia", weight: M1 },
    { name: "Family history of thrombophilia", weight: M1 },
    { name: "Currently Dexamethasone >160 mg/month", weight: M1 },
    { name: "Previous exposure to Anthracycline", weight: H },
    { name: "Previous exposure to radio-therapy (left chest/mediastinum)", weight: M1 },
    { name: "Current smoker or significant smoking history", weight: M1 },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}

let therapyF: TherapyInterface = {
  name: "RAF/MEK inhibitors",
  option_fields: [
    {
        name: "Age",
        options: [
          {name: "< 65", weight: L},
          {name: "≥ 65", weight: M1}
        ],
      },
    {
        name: "LVEF",
        options: [
          {name: "<50%", weight: H},
          {name: "50-54%", weight: M2},
          {name: ">=55%", weight: L}
        ]
      }
  ],
  slider_fields: [
    { name: "HF/cardiomyopathy/CTRCD", weight: VH},
    { name: "Severe VHD", weight: H },
    { name: "MI or PCI or CABG", weight: H },
    { name: "Stable angina", weight: H },
    { name: "Arrhythmia", weight: M1 },
    { name: "Elevated Baseline cardiac Troponin", weight: M2 },
    { name: "Elevated Baseline Natriuetic Peptides", weight: M2 },
    { name: "Hypertension", weight: M2 },
    { name: "Chronic kidney disease", weight: M1 },
    { name: "Diabetes mellitus", weight: M1 },
    { name: "Previous exposure to Anthracycline", weight: H },
    { name: "Previous exposure to radio-therapy (left chest/mediastinum)", weight: M2 },
    { name: "Current smoker or significant smoking history", weight: M1 },
    { name: "Obesity (BMI>30kg/m2)", weight: M1 }
  ]
}

let therapiesRawData: TherapyInterface[] = [therapyA, therapyB, therapyC, therapyD, therapyE, therapyF];
export let THERAPIES_DATA: Therapy[] = therapiesRawData.map((t) => createTherapy(t));
