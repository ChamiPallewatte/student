import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  selectedStudent: any;
  isStudentEdit: boolean = false;

  constructor() {}
}
