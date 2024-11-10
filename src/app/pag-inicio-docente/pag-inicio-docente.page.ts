import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pag-inicio-docente',
  templateUrl: './pag-inicio-docente.page.html',
  styleUrls: ['./pag-inicio-docente.page.scss'],
})
export class PagInicioDocentePage {
  usuario: string = localStorage.getItem('username') || 'Usuario';

  constructor(private toastController: ToastController) {}

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