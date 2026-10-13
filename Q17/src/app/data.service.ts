import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class DataService {
  getTopics(): string[] { return ['Component', 'Service', 'Module', 'Pipe', 'Directive']; }
}
