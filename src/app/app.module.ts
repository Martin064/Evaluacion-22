import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QRCodeModule,            // Módulo para generar códigos QR
    NgxScannerQrcodeModule    // Módulo para escanear códigos QR
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
           // Agrega BarcodeScanner a los proveedores
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}