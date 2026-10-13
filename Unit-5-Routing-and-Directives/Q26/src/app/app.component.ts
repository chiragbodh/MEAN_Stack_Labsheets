import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q26 — Built-in Directives';
visible = true; students = [{name:'Chirag Bodh',marks:88},{name:'Aman Kumar',marks:65},{name:'Priya Sharma',marks:35}];
grade(marks: number): string { return marks >= 80 ? 'A' : marks >= 60 ? 'B' : marks >= 40 ? 'C' : 'F'; }
}
