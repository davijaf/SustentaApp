import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoPage } from './conteudo.page';

describe('ConteudoPage', () => {
  let component: ConteudoPage;
  let fixture: ComponentFixture<ConteudoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
