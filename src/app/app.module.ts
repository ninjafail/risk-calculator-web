import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { RiskCalculatorComponent } from './risk-calculator/risk-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { OptionsFieldComponent } from './risk-calculator/options-field/options-field.component';
import { SliderFieldComponent } from './risk-calculator/slider-field/slider-field.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImprintComponent } from './imprint/imprint.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from './translation.pipe';
import { LocaleSwitcherComponent } from "./locale-switcher/locale-switcher.component";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    RiskCalculatorComponent,
    OptionsFieldComponent,
    SliderFieldComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatGridListModule,
    ImprintComponent,
    AppRoutingModule,
    LocaleSwitcherComponent,
    HttpClientModule,
    TranslocoRootModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
