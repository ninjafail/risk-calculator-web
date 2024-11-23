/**
 * The recommendations are defined recursively as follows:
 * CONDITION := AND | OR | NOT | RANGE | SELECT | OPTION
 * AND       := { type: 'AND', conditions: [ CONDITION, CONDITION ] }
 * OR        := { type: 'OR', conditions: [ CONDITION, CONDITION ] }
 * NOT       := { type: 'NOT', condition: CONDITION }
 * RANGE     := { type: 'RANGE', range: [ result_min, result_max ] } (including)
 * SELECT    := { type: 'SELECT', 
 *                selectId: 'id of select_field to be set to yes' }
 * OPTION    := { type: 'OPTION', 
 *                optionID: 'id of option_field', 
 *                value: 'name of the option that should be selected' }
 */

// Conditions as data
export type Condition =
  | AndCondition
  | ORCondition
  | NOTCondition
  | Range
  | Option
  | Select;

// Condition types
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

// number range representing min and max
export type NumberRange = [number, number];

export interface Range {
  type: 'RANGE';
  range: NumberRange;
}

export interface Option {
  type: 'OPTION';
  optionId: string;
  value: any;
}

export interface Select {
  type: 'SELECT';
  selectId: string;
}
