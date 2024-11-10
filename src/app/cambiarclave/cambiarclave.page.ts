import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {
  claveActual: string = '';
  nuevaClave: string = '';
  confirmarClave: string = '';
  userId: number = 0; // ID del usuario logueado

  constructor(
    private apiService: ApirestService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Obtener el ID del usuario desde localStorage
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.userId = parseInt(usuario, 10);
    } else {
      // Si no hay usuario en localStorage, redirigir al login
      this.navCtrl.navigateRoot('/login');
    }
  }

  async cambiarClave() {
    // Validar que todos los campos estén llenos
    if (!this.claveActual || !this.nuevaClave || !this.confirmarClave) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Validar que la nueva clave y la confirmación coincidan
    if (this.nuevaClave !== this.confirmarClave) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La nueva clave y la confirmación no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Obtener el usuario actual para verificar la clave antigua
    this.apiService.getUsuario(this.userId).subscribe(
      async (usuario) => {
        if (usuario.clave !== this.claveActual) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'La clave actual es incorrecta.',
            buttons: ['OK'],
          });
          await alert.present();
          return;
        }

        // Actualizar la clave en la base de datos
        this.apiService.actualizarClave(this.userId, this.nuevaClave).subscribe(
          async () => {
            const alert = await this.alertController.create({
              header: 'Éxito',
              message: 'La clave ha sido cambiada correctamente.',
              buttons: ['OK'],
            });
            await alert.present();

            // Limpiar campos
            this.claveActual = '';
            this.nuevaClave = '';
            this.confirmarClave = '';

            // Opcional: Redirigir al usuario al inicio de sesión
            this.navCtrl.navigateRoot('/login');
          },
          async (error) => {
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'No se pudo cambiar la clave. Inténtalo nuevamente.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        );
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo obtener la información del usuario.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}