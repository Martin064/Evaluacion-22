import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaInicioEstudiantePage } from './pagina-inicio-estudiante.page';

describe('PaginaInicioEstudiantePage', () => {
  let component: PaginaInicioEstudiantePage;
  let fixture: ComponentFixture<PaginaInicioEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicioEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
