import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {
  asignaturas: any[] = [];
  asistencias: any[] = [];
  selectedAsignatura: string = '';
  userType: string = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Obtener el tipo de usuario
    this.userType = this.authService.getCurrentUserType();

    // Cargar asignaturas del usuario actual
    this.authService.getCurrentUserAsignaturas().subscribe((asignaturas) => {
      this.asignaturas = asignaturas;
    });
  }

  // Cargar asistencias basadas en la asignatura seleccionada
  cargarAsistencias() {
    if (this.selectedAsignatura) {
      if (this.userType === 'estudiante') {
        this.authService.getStudentAsistencias(this.selectedAsignatura).subscribe((asistencias) => {
          this.asistencias = asistencias;
        });
      } else if (this.userType === 'docente') {
        this.authService.getProfessorAsistencias(this.selectedAsignatura).subscribe((asistencias) => {
          this.asistencias = asistencias;
        });
      }
    }
  }
}