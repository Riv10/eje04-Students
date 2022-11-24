import { Injectable } from '@angular/core';
import { Student } from "../models/student";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [
      {
        controlNumber: "18401186",
        age: 22,
        career: "ISC",
        curp:"RILA00721HNTVNRA5",
        email:"aaalrivaslu@ittepic.edu.mx",
        name:"Aaron Alejandro Rivas Luna",
        nip: 225,
        photo:"https://picsum.photos/id/237/200/300"
      },
      {
        controlNumber: "18401080",
        age: 18,
        career: "ISC",
        curp:"AAMA991217HNTLRN05",
        email:"andealvaradoma@ittepic.edu.mx",
        name:"Antonio Alvarado Martínez",
        nip: 224,
        photo:"https://picsum.photos/id/238/200/300"
      },
      {
        controlNumber: "18401090",
        age: 18,
        career: "ISC",
        curp:"CAVD991116HNTLRN04",
        email:"daalcalderonvi@ittepic.edu.mx",
        name:"Daniel Calderón Virgen",
        nip: 226,
        photo:"https://picsum.photos/id/239/200/300"
      },
    ];
   }

   public getStudents(): Student[]{
    return this.students;
   }

   public getStudentByControlNumber(cn:string): Student{
    let item : Student;
    item = this.students.find(
      (student)=>{
        return student.controlNumber==cn;
      }
    );
    return item;
   }

   public getStudentByEmail(eml:string): Student{
    let item : Student;
    item = this.students.find(
      (student)=>{
        return student.email==eml;
      }
    );
    return item;
   }

   public removeStudent(pos:number){
    this.students.splice(pos,1);
   }

   public newStudent(student:Student):void{
    this.students.push(student);
   }

   public modifyStudent(data):void{
      console.log(data);
      try{
        let item = this.getStudentByControlNumber(data.controlNumber);
        item.name = data.name;
        item.curp = data.curp;
        item.age = data.age;
        item.nip = data.nip;
        item.email = data.email;
        item.career = data.career;
        item.photo = data.photo;
      }catch(err){
        console.log(err);
      }
   }

   public studentLogin(email: String, nip: number): Student{
    let item: Student;
    item = this.students.find(
      (student)=> {
        return student.email==email && student.nip==nip;
      }
    );
    return item;
  }
}
