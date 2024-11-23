import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-locale-switcher',
  standalone: true,
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    TranslocoModule,
  ],
  templateUrl: './locale-switcher.component.html',
  styleUrl: './locale-switcher.component.scss',
})
export class LocaleSwitcherComponent {
  locales = [
    { code: 'en', name: 'English' },
    { code: 'it', name: 'Italiano' },
  ];
  selectedLocale = 'en';

  constructor(private translocoService: TranslocoService) {
    this.selectedLocale = translocoService.getActiveLang();
  }

  onChange(event: any) {
    console.log(event);
    console.log(this.selectedLocale);
    this.translocoService.setActiveLang(this.selectedLocale);
  }
}
