import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  selectedTeacher: any;
  isTeacherEdit: boolean = false;

  constructor() {}
}
