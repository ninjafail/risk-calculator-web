import {Component, EventEmitter} from '@angular/core';
import { Weight } from "./risk-calc-weights.enum";
import { Therapy, OptionField, DataField, therapyA, therapyB } from "./therapies";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.css']
})
export class RiskCalculatorComponent {
  title: string = "Risk Calculator";
  subtitle: string = "Calculate your risk of xy in drölf years.";

  therapies: Therapy[] = [therapyA, therapyB];
  chosenTherapy: Therapy = therapyA;

  test = null;

  constructor() {
  }


}

