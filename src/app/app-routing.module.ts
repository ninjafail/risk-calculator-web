import { NgModule } from '@angular/core';
import { RiskCalculatorComponent } from './risk-calculator/risk-calculator.component';
import { ImprintComponent } from './imprint/imprint.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'impressum', component: ImprintComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '', component: RiskCalculatorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
