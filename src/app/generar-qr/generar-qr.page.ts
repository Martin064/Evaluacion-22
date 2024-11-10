import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  asignaturas: { materia: string; secciones: string[] }[] = [];
  selectedAsignatura: { materia: string; secciones: string[] } | null = null;
  selectedSeccion: string = '';
  qrData: string = '';
  qrGenerado: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Cargar las asignaturas del usuario actual
    this.authService.getCurrentUserAsignaturas().subscribe((asignaturas) => {
      this.asignaturas = asignaturas;
    });
  }

  // Generar datos para el QR basados en la asignatura y sección seleccionada
  generarQR() {
    if (this.selectedAsignatura && this.selectedSeccion) {
      const materia = this.selectedAsignatura.materia;
      const seccion = this.selectedSeccion;
      this.qrData = `Asignatura: ${materia}, Sección: ${seccion}`;
      this.qrGenerado = true;
    }
  }

  // Reinicia el estado de QR cuando se selecciona una nueva asignatura
  onAsignaturaChange() {
    this.selectedSeccion = ''; // Limpiar la sección al cambiar de asignatura
    this.qrGenerado = false; // Ocultar QR hasta que se vuelva a generar
  }
}