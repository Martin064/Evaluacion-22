import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Asegúrate de que esta URL apunte a tu backend

  constructor(private http: HttpClient) { }

  // Obtener las materias inscritas por el estudiante
  getMateriasEstudiante(idEstudiante: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${idEstudiante}/materias`);
  }

  // Registrar la asistencia del estudiante
  registrarAsistencia(idEstudiante: string, materia: string): Observable<any> {
    const asistencia = {
      estudianteId: idEstudiante,
      materia,
      fecha: new Date().toISOString()
    };
    return this.http.post(`${this.apiUrl}/asistencias`, asistencia);
  }
}