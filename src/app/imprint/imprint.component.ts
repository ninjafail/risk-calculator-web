import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ MatCardModule, TranslocoModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.css',
})
export class ImprintComponent {
  email: string = 'florian@romann.lt';
}
