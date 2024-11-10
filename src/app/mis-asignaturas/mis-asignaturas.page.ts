import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {
  asignaturas: { materia: string; secciones: string[] }[] = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Cargar asignaturas del usuario actual
    this.authService.getCurrentUserAsignaturas().subscribe((asignaturas) => {
      this.asignaturas = asignaturas;
    });
  }
}