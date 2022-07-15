import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { StudentService } from 'src/app/services/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  averageMarks: number = 0;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.loadStudent();
  }
  goToAddStudentPage() {
    this.router.navigate(['/addstudent']);
  }

  loadStudent() {
    return this.apiService.readStudent().subscribe((data: any) => {
      debugger;
      this.students = data.data;
    });
  }
  // Delete student
  deleteStudent(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.apiService.deleteStudent(id).subscribe((data: any) => {
        this.loadStudent();
      });
    }
  }

  //update student
  editStudent(student: Student) {
    this.studentService.selectedStudent = student;
    this.studentService.isStudentEdit = true;
    this.router.navigate(['/addstudent']);
  }
}
