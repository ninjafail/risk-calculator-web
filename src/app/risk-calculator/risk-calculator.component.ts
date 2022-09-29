import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.css']
})
export class RiskCalculatorComponent implements OnInit {
  title: string = "Risk Calculator";
  subtitle: string = "Calculate your risk of xy in drölf years.";
  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
