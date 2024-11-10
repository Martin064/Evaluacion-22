import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicioEstudiantePage } from './pagina-inicio-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicioEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInicioEstudiantePageRoutingModule {}
