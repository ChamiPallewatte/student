import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { StudentDto } from '../models/studentDto.model.1';
import { Teacher } from '../models/teacher.model';
import { TeacherDto } from '../models/teacherDto.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public readStudent() {
    return this.httpClient.get<Student[]>(`${environment.baseUrl}/student`);
  }

  public createStudent(student: StudentDto) {
    debugger;
    return this.httpClient.post<Student>(
      `${environment.baseUrl}/student`,
      student
    );
  }

  public deleteStudent(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/student/${id}`);
  }

  public updateStudent(student: Student) {
    return this.httpClient.put<Student>(
      `${environment.baseUrl}/student/${student.id}`,
      student
    );
  }

  public readTeacher() {
    return this.httpClient.get<Teacher[]>(`${environment.baseUrl}/teacher`);
  }

  public deleteTeacher(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/teacher/${id}`);
  }

  public createTeacher(teacher: TeacherDto) {
    debugger;
    return this.httpClient.post<Teacher>(
      `${environment.baseUrl}/teacher`,
      teacher
    );
  }

  public updateTeacher(teacher: Teacher) {
    return this.httpClient.put<Teacher>(
      `${environment.baseUrl}/teacher/${teacher.id}`,
      teacher
    );
  }
}
