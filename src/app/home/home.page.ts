import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  handlerMessage = '';
  roleMessage = '';
  public students: Student[];
  public student: Student;

  constructor(private studentService: StudentService,private alertController: AlertController,private router: Router) {
    this.students = this.studentService.getStudents();
  }


  async removeStudent(pos:number) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Eliminación canceleda';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.studentService.removeStudent(pos);
            this.students=this.studentService.getStudents();
            this.handlerMessage = 'Eliminado';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  public irPerfil(student:Student) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)
      }
    };
    this.router.navigate(['perfil-student'], navigationExtras);
  }

  public getStudentByControlNumber(cn:string): void{
    this.router.navigate(['/view-student'],{
      queryParams: {controlNumber:cn}
    });
  }

  public newStudent():void{
    this.router.navigate(['/new-student']);
  }

}
