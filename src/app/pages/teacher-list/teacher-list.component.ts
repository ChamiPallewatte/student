import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];
  currentPage: number = 1;
  itemperPage: number = 10;

  constructor(
    private apiService: ApiService,
    public router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.loadteacher();
  }
  goToAddTeacherPage() {
    this.router.navigate(['/addteacher']);
  }

  loadteacher() {
    return this.apiService.readTeacher().subscribe((data: any) => {
      this.teachers = data.data;
    });
  }

  // Delete teacher
  deleteTeacher(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.apiService.deleteTeacher(id).subscribe((data: any) => {
        this.loadteacher();
      });
    }
  }
  //update teacher
  editTeacher(teacher: Teacher) {
    this.teacherService.selectedTeacher = teacher;
    this.teacherService.isTeacherEdit = true;
    this.router.navigate(['/addteacher']);
  }
}
