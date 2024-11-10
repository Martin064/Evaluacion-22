import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagInicioDocentePage } from './pag-inicio-docente.page';

const routes: Routes = [
  {
    path: '',
    component: PagInicioDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagInicioDocentePageRoutingModule {}
