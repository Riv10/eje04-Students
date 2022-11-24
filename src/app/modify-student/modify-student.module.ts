import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyStudentPageRoutingModule } from './modify-student-routing.module';

import { ModifyStudentPage } from './modify-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModifyStudentPageRoutingModule
  ],
  declarations: [ModifyStudentPage]
})
export class ModifyStudentPageModule {}
