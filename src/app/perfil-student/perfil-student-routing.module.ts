import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilStudentPage } from './perfil-student.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilStudentPageRoutingModule {}
