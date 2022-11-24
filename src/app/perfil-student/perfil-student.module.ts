import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilStudentPageRoutingModule } from './perfil-student-routing.module';

import { PerfilStudentPage } from './perfil-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilStudentPageRoutingModule
  ],
  declarations: [PerfilStudentPage]
})
export class PerfilStudentPageModule {}
