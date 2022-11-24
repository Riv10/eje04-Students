import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.page.html',
  styleUrls: ['./modify-student.page.scss'],
})
export class ModifyStudentPage implements OnInit {

  private student: Student;
  public myForm: FormGroup;
  public validatorMessages: Object;

  constructor(private aRoute:ActivatedRoute, private studentService:StudentService, private fb:FormBuilder, private router:Router, private toastController: ToastController) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe((param)=>{
      console.log(param);
      this.student = this.studentService.getStudentByControlNumber(param.controlNumber);
    });
    this.myForm = this.fb.group({
      name:["",Validators.required],
      curp:["",Validators.compose([Validators.required,Validators.minLength(18), Validators.maxLength(18), Validators.pattern('^[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]$')])],
      age:["",Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      nip:["",Validators.compose([Validators.required,Validators.min(10),Validators.max(9999),Validators.pattern('^[0-9]+$')])],
      email:["",Validators.compose([Validators.required,Validators.email])],
      career:["",Validators.required],
      photo:["",Validators.compose([Validators.required,Validators.pattern(/https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/)])]
    });
    this.validatorMessages = {
      name: [
        { type: 'required', message: "Nombre obligatorio" }
      ],
      curp: [
        { type: 'required', message: "La CURP es obligatoria" },
        { type: 'minlength', message: "La CURP debe de ser de mínimo 18 caracteres" },
        { type: 'maxlength', message: "La CURP debe de ser de máximo 18 caracteres" },
        { type: 'pattern', message: "Se ha escrito de manera incorrecta la CURP" }
      ],
      age: [
        { type: 'required', message: "Edad obligatoria" },
        { type: 'pattern', message: "La edad debe de ser numérico" }
      ],
      nip: [
        { type: 'required', message: "El NIP es obligatorio" },
        { type: 'min', message: "El NIP debe ser mayor a 9" },
        { type: 'max', message: "El NIP debe ser menor a 10000" },
        { type: 'pattern', message: "El NIP debe de ser numérico" }
      ],
      email: [
        { type: 'required', message: "Email obligatorio" },
        { type: 'email', message: "Email incorrecto" }
      ],
      career: [
        { type: 'required', message: "Carrera obligatoria" }
      ],
      photo: [
        { type: 'required', message: "URL obligatoria" },
        { type: 'pattern', message: "URL incorrecta" }
      ]
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Estudiante modificado',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  public modifyStudent(data):void{
    //Construir el objeto
    this.student = data;
    console.log(this.student.name);
    this.studentService.modifyStudent(this.student);
    this.presentToast();
    this.router.navigate(['/view-student'],{
      queryParams: {controlNumber:this.student.controlNumber}
    });
  }

}
