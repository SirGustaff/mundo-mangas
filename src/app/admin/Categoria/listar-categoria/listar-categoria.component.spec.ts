import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCategoriaComponent } from './listar-categoria.component';

describe('ListarCategoriaComponent', () => {
  let component: ListarCategoriaComponent;
  let fixture: ComponentFixture<ListarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCategoriaComponent]
    });
    fixture = TestBed.createComponent(ListarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
