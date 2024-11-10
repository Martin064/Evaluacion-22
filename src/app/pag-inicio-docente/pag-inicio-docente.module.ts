import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagInicioDocentePageRoutingModule } from './pag-inicio-docente-routing.module';

import { PagInicioDocentePage } from './pag-inicio-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagInicioDocentePageRoutingModule
  ],
  declarations: [PagInicioDocentePage]
})
export class PagInicioDocentePageModule {}
