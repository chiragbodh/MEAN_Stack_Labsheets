import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q16 — Interpolation';
  name = 'Chirag Bodh'; marks = 88; maximum = 100; course = 'MCA';
  greeting(): string { return `Welcome, ${this.name}!`; }
}
