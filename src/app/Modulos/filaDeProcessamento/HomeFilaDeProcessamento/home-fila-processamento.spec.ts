import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilaDeProcessamento } from './home-fila-processamento.component';

describe('HomePaginacaoPorDemandaExerciciosComponent', () => {
  let component: HomeFilaDeProcessamento;
  let fixture: ComponentFixture<HomeFilaDeProcessamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFilaDeProcessamento ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFilaDeProcessamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
