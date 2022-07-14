import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AddteacherComponent } from './pages/addteacher/addteacher.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'addteacher', component: AddteacherComponent },
  { path: 'teacher', component: TeacherListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
