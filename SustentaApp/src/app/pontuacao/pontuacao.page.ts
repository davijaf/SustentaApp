import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.page.html',
  styleUrls: ['./pontuacao.page.scss'],
  standalone: false
})
export class PontuacaoPage implements OnInit {
  ranking: { nome: string, data: string, pontos: number }[] = [];

  constructor() { }

  ngOnInit() {
    this.ranking = JSON.parse(localStorage.getItem('ranking') || '[]')
      .sort((a: any, b: any) => b.pontos - a.pontos)
      .slice(0, 10); // Top 10
  }

  limparRanking() {
    localStorage.removeItem('ranking');
    this.ranking = [];
  }
}
