import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/http/crud/crud.service';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

export const STUDENT_URL = 'student';

@Injectable({
  providedIn: 'root',
})
export class StudentService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(http, STUDENT_URL);
  }
  public getStudent(id: string): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/${STUDENT_URL}/${id}`)
      .pipe(take(1));
  }
  public getAllStudents(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/${STUDENT_URL}`);
  }
}
