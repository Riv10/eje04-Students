import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  private student: Student;

  constructor(private studentService:StudentService, private router:Router, private aRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.aRoute.queryParams.subscribe((param)=>{
      console.log(param);
      this.student = this.studentService.getStudentByControlNumber(param.controlNumber);
    });

  }

  public modifyStudent(nc: string): void{
    console.log(nc);
    this.router.navigate(['/modify-student'],{
      queryParams: {controlNumber: nc}
    });
  }

}
