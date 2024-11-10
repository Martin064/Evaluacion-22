import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LectorQrPageRoutingModule } from './lector-qr-routing.module';
import { LectorQrPage } from './lector-qr.page';

// Importa el módulo necesario para usar ngModel en formularios
import { ReactiveFormsModule } from '@angular/forms';

// Importa ngx-scanner-qrcode para el escaneo de QR
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,            // Para usar ngModel en el formulario
    ReactiveFormsModule,    // Si estás usando formularios reactivos
    IonicModule,
    LectorQrPageRoutingModule,
    NgxScannerQrcodeModule // Módulo para escanear QR
  ],
  declarations: [LectorQrPage]
})
export class LectorQrPageModule {}
