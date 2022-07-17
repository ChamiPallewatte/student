import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AddteacherComponent } from './pages/addteacher/addteacher.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculateAveragePipe } from './pipes/calculate-average.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomeComponent,
    AddstudentComponent,
    AddteacherComponent,
    TeacherListComponent,
    CalculateAveragePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
