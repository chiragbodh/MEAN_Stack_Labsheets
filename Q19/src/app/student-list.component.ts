import { Component } from '@angular/core';

@Component({ selector: 'app-student-list', standalone: false, template: `<h2>Student List</h2><ul><li *ngFor="let student of students">{{ student }}</li></ul>` })
export class StudentListComponent {
students = ['Chirag Bodh', 'Aman Kumar', 'Priya Sharma'];
}
