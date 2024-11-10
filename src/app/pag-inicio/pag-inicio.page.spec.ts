import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagInicioPage } from './pag-inicio.page';

describe('PagInicioPage', () => {
  let component: PagInicioPage;
  let fixture: ComponentFixture<PagInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
