import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-perfil-student',
  templateUrl: './perfil-student.page.html',
  styleUrls: ['./perfil-student.page.scss'],
})
export class PerfilStudentPage implements OnInit {

  public student: Student;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.student = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
  }


}
