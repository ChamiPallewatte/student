import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AddteacherComponent } from './pages/addteacher/addteacher.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomeComponent,
    AddstudentComponent,
    AddteacherComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
