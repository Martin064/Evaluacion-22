import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 

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
  isCameraActive: boolean = false; // Estado para saber si la cámara está activa

  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;  // Usamos el operador '!'

  constructor() {}

  ngOnInit() {
    this.loadAsignaturas();  // Cargar asignaturas al inicio
  }

  // Método para cargar las asignaturas del estudiante
  loadAsignaturas() {
    this.asignaturas = ['Asignatura 1', 'Asignatura 2', 'Asignatura 3'];  // Ejemplo de asignaturas
  }

  // Método que maneja la lógica del botón: activa la cámara o registra la asistencia
  handleButtonClick() {
    if (this.isCameraActive) {
      // Si la cámara está activa, registramos la asistencia
      this.registerAssistance();
    } else {
      // Si la cámara no está activa, la activamos
      this.startCamera();
    }
  }

  // Método para activar la cámara del celular y mostrarla en el video
  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Intentamos obtener acceso a la cámara del celular
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          // Asignamos el flujo de video al elemento <video> de la vista
          if (this.videoElement && this.videoElement.nativeElement) {
            this.videoElement.nativeElement.srcObject = stream;
            this.videoElement.nativeElement.play(); // Comienza a reproducir el video
          }
          this.isCameraActive = true; // La cámara está activa
          console.log("Cámara del celular activada.");
        })
        .catch(err => {
          console.error("Error al acceder a la cámara del celular:", err);
          this.presentAlert('Error', 'No se pudo acceder a la cámara del celular.');
        });
    } else {
      console.error("El dispositivo no soporta getUserMedia.");
      this.presentAlert('Error', 'No se puede acceder a la cámara en este dispositivo.');
    }
  }

  // Método para detener la cámara
  stopCamera() {
    if (this.videoElement && this.videoElement.nativeElement) {
      const stream = this.videoElement.nativeElement.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
      this.videoElement.nativeElement.srcObject = null;
    }
    this.isCameraActive = false;
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
      this.isCameraActive = false;  // Desactivamos la cámara después de registrar la asistencia
    } else {
      console.error('Datos incompletos para registrar la asistencia.');
    }
  }

  // Método que se llama cuando el estudiante cambia la asignatura seleccionada
  onAsignaturaChange() {
    console.log('Asignatura seleccionada:', this.selectedAsignatura);
  }

  // Método para mostrar una alerta (en caso de error)
  presentAlert(header: string, message: string) {
    // Aquí puedes implementar una alerta si es necesario (utiliza Ionic AlertController)
    console.error(header, message);
  }
}
