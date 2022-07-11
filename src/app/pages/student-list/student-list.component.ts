import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any;
  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {}

  loadstudent() {
    return this.StudentService.getAllStudents().subscribe((data) => {
      this.students = data;
    });
  }
}
