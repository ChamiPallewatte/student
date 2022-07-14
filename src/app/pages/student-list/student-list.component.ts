import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/model/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {}

  loadstudent() {
    return this.StudentService.getAllStudents().subscribe((data: any) => {
      debugger;
      this.students = data.data;
    });
  }
}
