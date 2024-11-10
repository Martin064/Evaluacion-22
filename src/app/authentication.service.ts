import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private usersUrl = 'http://localhost:3000/usuarios'; // URL de tu JSON Server
  private asistenciasUrl = 'http://localhost:3000/asistencias';

  constructor(private http: HttpClient) {}

  getCurrentUserType(): string {
    return localStorage.getItem('userType') || '';
  }

  // Obtener asignaturas del usuario actual
  getCurrentUserAsignaturas(): Observable<any[]> {
    const userId = localStorage.getItem('usuario');
    return this.http.get<any>(this.usersUrl).pipe(
      map((data) => {
        const user = data.find((u: any) => u.id === userId);
        return user ? user.materias : [];
      })
    );
  }

  // Obtener asistencias del estudiante para una asignatura específica
  getStudentAsistencias(asignatura: string): Observable<any[]> {
    const userId = localStorage.getItem('usuario');
    return this.http.get<any[]>(this.asistenciasUrl).pipe(
      map((asistencias) =>
        asistencias.filter(
          (asistencia) => asistencia.idEstudiante === userId && asistencia.idMateria === asignatura
        )
      )
    );
  }

  // Obtener asistencias de los estudiantes para una asignatura específica (para el docente)
  getProfessorAsistencias(asignatura: string): Observable<any[]> {
    return this.http.get<any[]>(this.asistenciasUrl).pipe(
      map((asistencias) =>
        asistencias
          .filter((asistencia) => asistencia.idMateria === asignatura)
          .map((asistencia) => ({
            ...asistencia,
            nombreEstudiante: this.getStudentName(asistencia.idEstudiante),
          }))
      )
    );
  }

  // Obtener el nombre del estudiante usando su ID
  private getStudentName(studentId: string): string {
    const estudiantes = [
      { id: '2', nombre: 'Carlos Silva' }, // Lista de estudiantes de ejemplo
      // Agrega más estudiantes según sea necesario
    ];
    const estudiante = estudiantes.find((e) => e.id === studentId);
    return estudiante ? estudiante.nombre : `Estudiante ID: ${studentId}`;
  }
}