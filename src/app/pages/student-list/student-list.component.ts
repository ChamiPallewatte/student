import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToAddStudentPage() {
    this.router.navigate(['/addstudent']);
  }
}
