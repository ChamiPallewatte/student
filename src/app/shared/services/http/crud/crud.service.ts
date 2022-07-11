import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagedResponse } from 'src/app/shared/interfaces/responses.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(
    protected http: HttpClient,
    @Inject(String) protected url: string
  ) {}

  public get<T>(params?: HttpParams): Observable<IPagedResponse> {
    return this.http.get<T>(this.url, { params }).pipe(take(1));
  }

  public getOne<T>(id: string, params?: HttpParams): Observable<T | any> {
    return this.http.get<T>(`${this.url}/${id}`, { params }).pipe(take(1));
  }

  public post<T>(body: any, params?: HttpParams): Observable<T | any> {
    delete body.id;
    return this.http.post<T>(this.url, body, { params }).pipe(take(1));
  }

  public put<T>(body: any, params?: HttpParams): Observable<T | any> {
    const id = body.id;
    delete body.id;
    return this.http
      .put<T>(`${this.url}/${id}`, body, { params })
      .pipe(take(1));
  }

  public delete<T>(id: string, params?: HttpParams): Observable<T | any> {
    return this.http.delete<T>(`${this.url}/${id}`, { params }).pipe(take(1));
  }
}
