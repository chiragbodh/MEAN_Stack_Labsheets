import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q17 — Angular CLI Commands';
  topics: string[];
  constructor(data: DataService) { this.topics = data.getTopics(); }
}
