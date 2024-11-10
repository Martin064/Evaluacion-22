import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';   // Propiedad para el nombre de usuario
  password: string = '';   // Propiedad para la contraseña
  loading: boolean = false; // Propiedad para el estado de carga

  constructor(
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private apiService: ApirestService
  ) {}

  async onSubmit() {
    this.loading = true; // Inicia la carga

    // Verifica las credenciales con el API
    this.apiService.login(this.username, this.password).subscribe(
      async (usuarios) => {
        if (usuarios.length > 0) {
          const loading = await this.loadingController.create({
            message: 'Iniciando sesión...',
          });
          await loading.present();

          setTimeout(async () => {
            await loading.dismiss();

            const usuario = usuarios[0];

            // Guardar el ID del usuario, credenciales y tipo en localStorage
            localStorage.setItem('usuario', usuario.id.toString());
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('tipoUsuario', usuario.tipo); // Guardar el tipo de usuario

            // Redirigir según el tipo de usuario
            if (usuario.tipo === 'docente') {
              this.router.navigate(['/pag-inicio-docente']);
            } else if (usuario.tipo === 'estudiante') {
              this.router.navigate(['/pagina-inicio-estudiante']);
            }
          }, 2000);
        } else {
          this.showToast('Credenciales incorrectas');
        }

        this.loading = false; // Finaliza la carga
      },
      async (error) => {
        this.showToast('Error en el servidor. Inténtalo más tarde.');
        this.loading = false; // Finaliza la carga
      }
    );
  }

  async resetPassword() {
    this.showToast('Funcionalidad de restablecimiento en desarrollo');
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}