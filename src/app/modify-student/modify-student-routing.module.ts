import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyStudentPage } from './modify-student.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyStudentPageRoutingModule {}
