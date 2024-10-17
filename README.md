# RiskCalculatorWeb

This project's purpose is to write a small tool, that can calculate the risk of baseline cardiovascular toxicity, based on the 2022 ESC Guidelines on cardio-oncology (Lyon et al. 2022), while learning about angular. It is hosted on github pages (https://ninjafail.github.io/risk-calculator-web/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Deploy the app via

after installing all node packages via `npm i` and angular cli version `npm i -g @angular/cli@14.2.2`, deploy the app like this:
`ng deploy --base-href=/risk-calculator-web/`

## Contribute Therapies

The therapies are stored in a data structure and displayed baed on that data. If you want a therapy to be added please open a issue or just send me the data in the following format.

```js
// L: LOW (0); M1, M2: MEDIUM(1,2); H: HIGH(5); VH: VERY HIGH(100)
{
  name: 'name of the therapy',
  option_fields: [
    {
      name: 'field with multiple options',
      options: [
        { name: 'option 1', weight: L },
        { name: 'option 2', weight: M1 },
        { name: 'option 3', weight: M2 },
      ],
    },
    {
      name: 'another field with multiple options',
      options: [
        { name: 'option 1', weight: H },
        { name: 'option 2', weight: VH },
        { name: 'option 3', weight: L },
      ],
    },
  ],
  slider_fields: [
    { name: 'field 1 with an yes/no option', weight: L },
    { name: 'field 2 with an yes/no option', weight: H },
    { name: 'field 3 with an yes/no option', weight: M2 },
    { name: 'field 4 with an yes/no option', weight: M1 },
    { name: 'field 5 with an yes/no option', weight: VH },
    { name: 'field 6 with an yes/no option', weight: M2 },
    { name: 'field x with an yes/no option', weight: L },
  ],
  recommendations: [
    {
      condition: { type: 'RANGE', range: [0, 1] },
      recommendations: [
        'Recommendation 1',
        'Recommendation 2',
        'Recommendation 3',
        '...',
      ],
    },
    {
      condition: { type: 'RANGE', range: [2, 4] },
      recommendations: ['blabla', '...'],
    },
    {
      condition: {
        type: 'AND',
        conditions: [
          {
            type: 'OR',
            conditions: [
              { type: 'RANGE', range: [5, Number.POSITIVE_INFINITY] },
              { type: 'SELECT', select: 'field 4 with an yes/no option' },
            ],
          },
          {
            type: 'NOT',
            condition: {
              type: 'OPTION',
              option: 'another field with multiple options',
              value: 'option 2',
            },
          },
        ],
      },
      recommendations: ['1337', '...'],
    },
  ],
}
```

The recommendations are defined recursively as follows:

```
CONDITION := AND | OR | NOT | RANGE | SELECT | OPTION
AND       := { type: 'AND',     conditions: [ CONDITION, CONDITION ] }
OR        := { type: 'OR',      conditions: [ CONDITION, CONDITION ] }
NOT       := { type: 'NOT',     condition: CONDITION }
RANGE     := { type: 'RANGE',   range: [ result_min, result_max ] } // both included
SELECT    := { type: 'SELECT',  select: 'name of select_field to be set to yes' }
OPTION    := { type: 'OPTION',  option: 'name of option_field', value: 'name of the option that should be selected' }
```

If you need more examples, please look at the file [therapies.data.ts](https://github.com/ninjafail/risk-calculator-web/blob/3e7b668f934705c4b804f0bd000412a90020409d/src/app/risk-calculator/therapies.data.ts).
