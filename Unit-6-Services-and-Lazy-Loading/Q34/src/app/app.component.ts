import { Component } from '@angular/core';
import { Student, StudentService } from './student.service';
@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q34 — Build a Service';
students: Student[];
constructor(service: StudentService) { this.students = service.getStudents(); }
}
