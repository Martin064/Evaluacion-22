Injectable
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) {}

  // Método genérico para obtener un elemento por ID
  getById(apiUrl: string, id: number): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  // Método genérico para actualizar un elemento por ID
  updateById(apiUrl: string, id: number, data: any): Observable<any> {
    return this.http.patch(`${apiUrl}/${id}`, data);
  }

  // Otros métodos CRUD genéricos (opcional)
  getAll(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }

  create(apiUrl: string, data: any): Observable<any> {
    return this.http.post(apiUrl, data);
  }

  deleteById(apiUrl: string, id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}