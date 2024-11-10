import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicio-estudiante',
  templateUrl: './pagina-inicio-estudiante.page.html',
  styleUrls: ['./pagina-inicio-estudiante.page.scss'],
})
export class PaginaInicioEstudiantePage {
  scannedData: any;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  // Método para manejar el resultado del escaneo del QR
  handleScanResult(result: any) {
    this.scannedData = result;  // Almacena los datos escaneados
    this.showScanResult();
  }

  // Muestra un mensaje de éxito con el contenido del código QR escaneado
  async showScanResult() {
    const alert = await this.alertController.create({
      header: 'Escaneo exitoso',
      message: `Contenido del QR: ${this.scannedData}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Muestra un mensaje de error en caso de fallo en el escaneo
  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo escanear el código. Por favor, intenta nuevamente.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Método para cerrar sesión
  async salir() {
    const toast = await this.toastController.create({
      message: 'Has cerrado sesión.',
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
    localStorage.clear(); // Limpia la información de sesión
  }
}
