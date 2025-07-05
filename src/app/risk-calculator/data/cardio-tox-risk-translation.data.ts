import { Stratification } from '../classes/stratification.classes';
import { IStratification } from '../classes/stratification.types';
import { therapies } from './cardio-tox-risk-therapies.data';

const strat: IStratification = {
  title: {
    en: 'Baseline Cardiovascular Toxicity Risk',
    it: 'Stratificazione del rischio di tossicità cardiovascolare di base',
  },
  subtitle: {
    en: 'Calculate your baseline cardiovascular toxicity risk',
    it: 'Calcola il tuo rischio di tossicità cardiovascolare di base',
  },
  therapySlectionLabel: {
    en: 'Pick your planned chemotherapy:',
    it: 'Seleziona la tua terapia scelta:',
  },
  option_fields: [
    {
      id: 'age',
      title: {
        en: 'Age',
        it: 'Età',
      },
    },
    {
      id: 'lvef',
      title: {
        en: 'LVEF',
        it: 'Frazione di eiezione del Ventricolo Sinistro (LVEF)',
      },
    },
  ],
  slider_fields: [
    {
      id: 'hf',
      title: {
        en: 'HF/cardiomyopathy/CTRCD',
        it: 'HF/Cardiomiopatia/CTRCD',
      },
    },
    {
      id: 'vhd',
      title: {
        en: 'Severe VHD',
        it: 'VHD severa',
      },
    },
    {
      id: 'mi',
      title: {
        en: 'MI or PCI or CABG',
        it: 'MI o PCI o CABG',
      },
    },
    {
      id: 'angina',
      title: {
        en: 'Stable angina',
        it: 'Angina stabile',
      },
    },
    {
      id: 'troponin',
      title: {
        en: 'Elevated Baseline cardiac Troponin',
        it: 'Troponina cardiaca di base elevata',
      },
    },
    {
      id: 'natriuetic',
      title: {
        en: 'Elevated Baseline Natriuetic Peptides',
        it: 'Peptidi natriuretici di base elevati ',
      },
    },
    {
      id: 'hypertension',
      title: {
        en: 'Hypertension',
        it: 'Ipertensione',
      },
    },
    {
      id: 'ckd',
      title: {
        en: 'Chronic kidney disease',
        it: 'Malattia renale cronica',
      },
    },
    {
      id: 'diabetes',
      title: {
        en: 'Diabetes mellitus',
        it: 'Diabete mellito',
      },
    },
    {
      id: 'anthracycline',
      title: {
        en: 'Previous exposure to Anthracycline',
        it: 'Esposizione precedente ad antracicline',
      },
    },
    {
      id: 'radiotherapy',
      title: {
        en: 'Previous exposure to radio-therapy (left chest/mediastinum)',
        it: 'Esposizione precedente a radioterapia (torace sinistro/mediastino)',
      },
    },
    {
      id: 'chemotherapy',
      title: {
        en: 'Previous exposure to other chemotherapy',
        it: 'Esposizione precedente ad altre chemioterapie',
      },
    },
    {
      id: 'smoker',
      title: {
        en: 'Current smoker or significant smoking history',
        it: 'Fumatore attuale o significativa storia di fumo',
      },
    },
    {
      id: 'obesity',
      title: {
        en: 'Obesity (BMI>30kg/m2)',
        it: 'Obesità (BMI>30kg/m2)',
      },
    },
    {
      id: 'arryth',
      title: {
        en: 'Arrhythmia',
        it: '',
      },
    },
    {
      id: 'currAnthra',
      title: {
        en: 'Current treatment includes anthracyclines before',
        it: '',
      },
    },
    {
      id: 'Trastuz',
      title: {
        en: 'Previous exposure to Trastuzumab',
        it: '',
      },
    },
    {
      id: 'arterial',
      title: {
        en: 'Arterial vascular disease',
        it: '',
      },
    },
    {
      id: 'thromb',
      title: {
        en: 'Venous thrombosis (DVT/PE)',
        it: '',
      },
    },
    {
      id: 'qtc480',
      title: {
        en: 'QTc ≥ 480 ms',
        it: '',
      },
    },
    {
      id: 'qtc450',
      title: {
        en: '450 ≤ QTc < 480 ms (men); 460 ≤ QTc < 480 ms (women)',
        it: '',
      },
    },
    {
      id: 'prot',
      title: {
        en: 'Proteinuria',
        it: '',
      },
    },
    {
      id: 'lipid',
      title: {
        en: 'Hyperlipidaemia',
        it: '',
      },
    },
    {
      id: 'ankle',
      title: {
        en: 'Abnormal ankle-brachial pressure index',
        it: '',
      },
    },
    {
      id: 'pulm',
      title: {
        en: 'Pulmonary hypertension',
        it: '',
      },
    },
    {
      id: 'tki',
      title: {
        en: 'Arterial thrombosis with TKI',
        it: '',
      },
    },
    {
      id: 'cvd>20',
      title: {
        en: 'CVD 10-year risk score > 20%',
        it: '',
      },
    },
    {
      id: 'famHistThromb',
      title: {
        en: 'Family history of thrombophilia',
        it: '',
      },
    },
    {
      id: 'PiCvTox',
      title: {
        en: 'Prior PI CV toxicity',
        it: '',
      },
    },
    {
      id: 'CvTox',
      title: {
        en: 'Prior IMiD CV toxicity',
        it: '',
      },
    },
    {
      id: 'lv-hypertrophy',
      title: {
        en: 'LV hypertrophy',
        it: '',
      },
    },
    {
      id: 'amyloidosis',
      title: {
        en: 'Cardiac amyloidosis',
        it: '',
      },
    },
    {
      id: 'dexamethasone',
      title: {
        en: 'Currently Dexamethasone >160 mg/month',
        it: '',
      },
    },
  ],
  recommendations: [
    {
      id: 'bcr',
      recommendation: {
        en: 'BCR-ABL-TKI',
        it: '',
      },
    },
    {
      id: 'ecg-lipid',
      recommendation: {
        en: 'Baseline ECG, Lipid-profile/HbA1c-Control and TTE recommended',
        it: '',
      },
    },
    {
      id: 'nilo-ecg',
      recommendation: {
        en: 'Nilotinib/Ponatinib: ECG, Lipid-profile/HbA1c-Control every 3 months during treatment recommended',
        it: '',
      },
    },
    {
      id: 'nilo-abi',
      recommendation: {
        en: 'Nilotinib/Ponatinib: Baseline ABI-Control and every 6 months during treatment may be considered',
        it: '',
      },
    },
    {
      id: 'dasa',
      recommendation: {
        en: 'Dasatinib/Posatinib: TTE-Control every 3 months should be considered',
        it: '',
      },
    },
    {
      id: 'ecg-tte-trop-nt',
      recommendation: {
        en: 'Baseline ECG, TTE, cardiac troponin/NT-proBNP recommended',
        it: '',
      },
    },
    {
      id: 'trop-2-4-6-may',
      recommendation: {
        en: 'Cardiac troponin-Controls at cycles 2,4,6 may be considered',
        it: '',
      },
    },
    {
      id: 'tte-4-may',
      recommendation: {
        en: 'TTE-Control at cycle 4 may be considered',
        it: '',
      },
    },
    {
      id: 'trop-post-3-may',
      recommendation: {
        en: 'Cardiac troponin-Control 3 months post treatment may be considered',
        it: '',
      },
    },
    {
      id: 'tte-post-12-rec',
      recommendation: {
        en: 'TTE-Control follow up 12 months post treatment recommended',
        it: '',
      },
    },
    {
      id: 'trop-2-4-6-should',
      recommendation: {
        en: 'Cardiac troponin-Controls at cycles 2,4,6 should be considered',
        it: '',
      },
    },
    {
      id: 'tte-4-should',
      recommendation: {
        en: 'TTE-Control at cycle 4 should be considered',
        it: '',
      },
    },
    {
      id: 'tte-trop-post-3-should',
      recommendation: {
        en: 'TTE-& cardiac troponin-Control 3 months post treatment should be considered',
        it: '',
      },
    },
    {
      id: 'trop-every-rec',
      recommendation: {
        en: 'Cardiac troponin-Controls every cycle recommended',
        it: '',
      },
    },
    {
      id: 'tte-2-4-6-rec',
      recommendation: {
        en: 'TTE-Control at cycles 2,4,6 recommended',
        it: '',
      },
    },
    {
      id: 'tte-post-3-rec',
      recommendation: {
        en: 'TTE-& cardiac troponin-Control 3 months post treatment recommended',
        it: '',
      },
    },
    {
      id: 'tte-post-12-rec',
      recommendation: {
        en: 'TTE-Control 12 months post treatment recommended',
        it: '',
      },
    },
    {
      id: 'tte-every-3-rec',
      recommendation: {
        en: 'TTE-Control every 3 months during treatment recommended',
        it: '',
      },
    },
    {
      id: 'trop-bnp-during-may',
      recommendation: {
        en: 'Cardiac troponin/BNP-Controls during treatment may be considered',
        it: '',
      },
    },
    {
      id: 'trop-bnp-post-12-may',
      recommendation: {
        en: 'Cardiac troponin/BNP-Controls 12 months post treatment may be considered',
        it: '',
      },
    },
    {
      id: 'tte-trop-bnp-every-3-rec',
      recommendation: {
        en: 'TTE/cardiac troponin/BNP-Controls every 3 months during treatment recommended',
        it: '',
      },
    },
    {
      id: 'tte-trop-bnp-post-3-rec',
      recommendation: {
        en: 'TTE/cardiac troponin/BNP-Controls 3 months post treatment recommended',
        it: '',
      },
    },
    {
      id: 'tte-trop-bnp-post-12-rec',
      recommendation: {
        en: 'TTE/cardiac troponin/BNP-Controls 12 months post treatment recommended',
        it: '',
      },
    },
    {
      id: 'ecg-rec',
      recommendation: {
        en: 'Baseline ECG recommended',
        it: '',
      },
    },
    {
      id: 'tte-should',
      recommendation: {
        en: 'Baseline TTE should be considered',
        it: '',
      },
    },
    {
      id: 'home-bp',
      recommendation: {
        en: 'Home BP monitoring is recommended daily during the first cycle, after each increase of anticancer treatment dose, and every 2–3 weeks thereafter',
        it: '',
      },
    },
    {
      id: 'no',
      recommendation: {
        en: 'No scheduled follow ups necessary',
        it: '',
      },
    },
    {
      id: 'nt-may',
      recommendation: {
        en: 'Baseline NT-proBNP may be considered',
        it: '',
      },
    },
    {
      id: 'tte-nt-every-4-may',
      recommendation: {
        en: 'TTE/NT-proBNP-Control every 4 months during treatment may be considered',
        it: '',
      },
    },
    {
      id: 'tte-every-6-12-should',
      recommendation: {
        en: 'TTE-Control every 6-12 months during treatment should be considered',
        it: '',
      },
    },
    {
      id: 'ecg-tte-rec',
      recommendation: {
        en: 'Baseline ECG, TTE recommended',
        it: '',
      },
    },
    {
      id: 'nt-should',
      recommendation: {
        en: 'Baseline NT-proBNP should be considered',
        it: '',
      },
    },
    {
      id: 'ecg-2-ini-rec',
      recommendation: {
        en: 'ECG-Control 2 weeks after intitiation of treatment and when increasing the dose recommended',
        it: '',
      },
    },
    {
      id: 'tte-nt-every-3-should',
      recommendation: {
        en: 'TTE/NT-proBNP-Controls every 3 months during treatment should be considered',
        it: '',
      },
    },
    {
      id: 'tte-4-ini-rec',
      recommendation: {
        en: 'TTE-Control 4 weeks after intitiation of treatment recommended',
        it: '',
      },
    },
    {
      id: 'ecg-trop-nt-tte-mri-rec',
      recommendation: {
        en: 'Baseline ECG, cardiac troponin, NT-proBNP, TTE and cardiac-MRI recommended',
        it: '',
      },
    },
    {
      id: 'bp-every-visit-rec',
      recommendation: {
        en: 'Blood pressure monitoring at every clinical visit during treatment recommended',
        it: '',
      },
    },
    {
      id: 'bp-daily-should',
      recommendation: {
        en: 'Blood pressure monitoring daily at home during treatment should be considered',
        it: '',
      },
    },
    {
      id: 'bio-3-6-rec',
      recommendation: {
        en: 'Biomarker every 3-6 months during treatment recommended',
        it: '',
      },
    },
    {
      id: 'tte-3-should',
      recommendation: {
        en: 'TTE every 3 cycles should be considered',
        it: '',
      },
    },
    {
      id: 'ecg-trop-tte-mri-rec',
      recommendation: {
        en: 'Baseline ECG, cardiac troponin, TTE and cardiac-MRI recommended',
        it: '',
      },
    },
    {
      id: 'nt-every-carf-bort-should',
      recommendation: {
        en: 'NT-proBNP every cycle during the first 6 cycles under Carfilzomib or Bortezomib should be considered',
        it: '',
      },
    },
    {
      id: 'tte-3-carf-may',
      recommendation: {
        en: 'TTE every 3 cycles under Carfilzomib may be considered',
        it: '',
      },
    },
    {
      id: 'tte-3-carf-should',
      recommendation: {
        en: 'TTE every 3 cycles under Carfilzomib should be considered',
        it: '',
      },
    },
    {
      id: 'tte-may',
      recommendation: {
        en: 'Baseline TTE may be considered',
        it: '',
      },
    },
    {
      id: 'bp-every-visit-weekly-rec',
      recommendation: {
        en: 'Blood pressure monitoring at each clinical visit and weekly outpatient monitoring during the first 3 months of treatment and monthly thereafter recommended',
        it: '',
      },
    },
    {
      id: 'cobi-vem-rec',
      recommendation: {
        en: 'Cobimetinib/Vemurafenib: ECG 2 & 4 weeks after initiation of treatment and every 3 months thereafter recommended',
        it: '',
      },
    },
    {
      id: 'tte-4-should',
      recommendation: {
        en: 'TTE-Control every 4 months should be considered',
        it: '',
      },
    },
  ],
  therapies: therapies,
};

export const CARDIOVASCULAR_TOXICITY_RISK_STRATIFICATION: Stratification =
  new Stratification(strat);
