import { TestBed } from '@angular/core/testing';

import { RiskCalculatorService } from './risk-calculator.service';

describe('RiskCalculatorService', () => {
  let service: RiskCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
