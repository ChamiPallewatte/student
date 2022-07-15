import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { StudentDto } from 'src/app/models/studentDto.model.1';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student-list/student.model';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
})
export class AddstudentComponent implements OnInit {
  student: StudentDto = new StudentDto();
  studentId: string = '';
  isUpdateStudent: boolean = false;

  constructor(
    private apiService: ApiService,
    public router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    if (this.studentService.selectedStudent) {
      this.student = this.studentService.selectedStudent;
      this.isUpdateStudent = this.studentService.isStudentEdit;
    }
  }

  onClickSubmit() {
    if (this.studentService.isStudentEdit) {
      let updatedStudent = new Student();
      updatedStudent.id = this.studentService.selectedStudent.id;
      updatedStudent.name = this.studentService.selectedStudent.name;
      updatedStudent.englishMarks = this.student.englishMarks;
      updatedStudent.mathsMarks = this.student.mathsMarks;
      updatedStudent.scienceMarks = this.student.scienceMarks;
      this.apiService.updateStudent(updatedStudent).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/student']);
        }
      });
    } else {
      this.apiService.createStudent(this.student).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/student']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.studentService.selectedStudent = null;
    this.studentService.isStudentEdit = false;
  }
}
