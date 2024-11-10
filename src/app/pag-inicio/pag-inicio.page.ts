import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage{
  usuario: string = 'Usuario1';

  constructor(private alertController: AlertController,
    private toastController: ToastController) {}
    async salir() {
      const toast = await this.toastController.create({
        message: 'Has cerrado sesión.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
