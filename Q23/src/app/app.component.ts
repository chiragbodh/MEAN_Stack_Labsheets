import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q23 — Get Input Box Value and Display';
savedName = ''; liveName = '';
onKeyup(event: Event): void { this.liveName = (event.target as HTMLInputElement).value; }
}
