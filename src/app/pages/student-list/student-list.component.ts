import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {}
  goToAddStudentPage() {
    this.router.navigate(['/addstudent']);
  }

  loadStudent() {
    return this.apiService.readStudent().subscribe((data: any) => {
      this.students = data.data;
    });
  }
}
