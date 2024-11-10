import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicioEstudiantePageRoutingModule } from './pagina-inicio-estudiante-routing.module';

import { PaginaInicioEstudiantePage } from './pagina-inicio-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicioEstudiantePageRoutingModule
  ],
  declarations: [PaginaInicioEstudiantePage]
})
export class PaginaInicioEstudiantePageModule {}
