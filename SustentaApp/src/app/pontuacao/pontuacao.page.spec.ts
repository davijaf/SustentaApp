import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontuacaoPage } from './pontuacao.page';

describe('PontuacaoPage', () => {
  let component: PontuacaoPage;
  let fixture: ComponentFixture<PontuacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PontuacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
