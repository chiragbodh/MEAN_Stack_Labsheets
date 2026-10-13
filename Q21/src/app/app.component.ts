import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q21 — Button Click Function';
count = 0; increment(): void { this.count++; } decrement(): void { this.count--; } reset(): void { this.count = 0; }
}
