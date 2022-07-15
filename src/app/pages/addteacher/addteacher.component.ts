import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherDto } from 'src/app/models/teacherDto.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css'],
})
export class AddteacherComponent implements OnInit {
  teacher: TeacherDto = new TeacherDto();
  teacherId: string = '';
  isUpdateTeacher: boolean = false;
  constructor(
    private apiService: ApiService,
    public router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    if (this.teacherService.selectedTeacher) {
      this.teacher = this.teacherService.selectedTeacher;
      this.isUpdateTeacher = this.teacherService.isTeacherEdit;
    }
  }
  onClickSubmit() {
    if (this.teacherService.isTeacherEdit) {
      let updatedTeacher = new Teacher();
      updatedTeacher.id = this.teacherService.selectedTeacher.id;
      updatedTeacher.name = this.teacherService.selectedTeacher.name;
      updatedTeacher.age = this.teacher.age;
      updatedTeacher.subject = this.teacher.subject;

      this.apiService.updateTeacher(updatedTeacher).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/teacher']);
        }
      });
    } else {
      this.apiService.createTeacher(this.teacher).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/teacher']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.teacherService.selectedTeacher = null;
    this.teacherService.isTeacherEdit = false;
  }
}
