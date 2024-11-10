import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {
  scannedData: string | null = null;
  selectedAsignatura: string | null = null;  // Asignatura seleccionada
  asignaturas: string[] = [];  // Lista de asignaturas inscritas
  assistanceList: any[] = [];  // Lista de asistencia

  constructor() {}

  ngOnInit() {
    this.loadAsignaturas();  // Cargar asignaturas al inicio
  }

  // Método para cargar las asignaturas del estudiante
  loadAsignaturas() {
    // Aquí puedes simular o cargar las asignaturas de forma local
    this.asignaturas = ['Asignatura', 'Asignatura', 'Asignatura'];  // Ejemplo de asignaturas
  }

  // Método que se ejecuta cuando el QR es escaneado correctamente
  onScanSuccess(event: any) {
    this.scannedData = event;
    console.log('QR Escaneado:', this.scannedData);
  }

  // Método para manejar errores en el escaneo del QR
  onScanError(event: any) {
    console.error('Error al escanear el QR', event);
  }

  // Método para registrar la asistencia
  registerAssistance() {
    if (this.scannedData && this.selectedAsignatura) {
      const date = new Date();  // Fecha y hora actuales
      const asistenciaRecord = {
        asignatura: this.selectedAsignatura,
        fecha: date.toISOString(),
        alumno: 'Estudiante X',  // Nombre del estudiante (esto lo podrías obtener de algún servicio de autenticación)
        codigoQR: this.scannedData
      };
      
      // Simulamos que estamos guardando la asistencia localmente
      this.assistanceList.push(asistenciaRecord);  // Añadir a la lista local de asistencias
      console.log('Asistencia registrada', asistenciaRecord);
      
      // Limpiar los datos para el siguiente escaneo
      this.scannedData = null;
      this.selectedAsignatura = null;
    } else {
      console.error('Datos incompletos para registrar la asistencia.');
    }
  }

  // Método que se llama cuando el estudiante cambia la asignatura seleccionada
  onAsignaturaChange() {
    console.log('Asignatura seleccionada:', this.selectedAsignatura);
  }
}
