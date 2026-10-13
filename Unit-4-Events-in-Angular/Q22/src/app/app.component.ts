import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q22 — Different Events';
events: string[] = [];
log(event: string): void { this.events = [new Date().toLocaleTimeString() + ' — ' + event, ...this.events].slice(0,30); }
onKey(event: KeyboardEvent): void { this.log('keyup: ' + event.key); }
}
