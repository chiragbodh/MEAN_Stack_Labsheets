import { Injectable } from '@angular/core';
export interface Student { name:string; course:string; marks:number; }
@Injectable({providedIn:'root'})
export class StudentService {
  getStudents(): Student[] {
    return [{name:'Chirag Bodh',course:'MCA',marks:88},{name:'Aman Kumar',course:'MCA',marks:72},{name:'Priya Sharma',course:'MCA',marks:65}];
  }
}
