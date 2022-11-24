import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:String;
  public nip:String;
  public myForm:FormGroup;

  constructor(private fb:FormBuilder, private toastController: ToastController, private router:Router, private studentService:StudentService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: "",
      nip:""
    });
  }

  public login(data):void{
    console.log(data);
    this.email = data.email;
    this.nip = data.nip;
    if(this.email == "admin" && this.nip == "1234"){
      this.presentToast('bottom','Bienvenido');
      this.router.navigate(['/home']);
    }else if (this.studentService.studentLogin(this.myForm.get('email').value,this.myForm.get('nip').value)) {
      this.presentToast('bottom','Ingreso correcto');
      let item = this.studentService.studentLogin(this.myForm.get('email').value,this.myForm.get('nip').value);
      this.getStudentByControlNumber(item.controlNumber);
    }else{
      this.presentToast('bottom','Acceso Incorrecto');
    }
  }

  public getStudentByControlNumber(cn: string): void{
    this.router.navigate(['/view-student'],{
      queryParams: {controlNumber: cn}
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1000,
      position: position
    });

    await toast.present();
  }

}
