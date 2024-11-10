import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagInicioDocentePage } from './pag-inicio-docente.page';

describe('PagInicioDocentePage', () => {
  let component: PagInicioDocentePage;
  let fixture: ComponentFixture<PagInicioDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicioDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
