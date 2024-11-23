import { Pipe, PipeTransform } from '@angular/core';
import { TranslatableText } from './risk-calculator/classes/stratification.types';
import { TranslocoService } from '@jsverse/transloco';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translocoService: TranslocoService) {}

  transform(value: TranslatableText, args?: any): any {
    if (typeof value === 'string') return value;
    
    const locale = this.translocoService.getActiveLang();

    if (locale === 'it' && value.it) return value.it;

    return value.en;
  }
}
