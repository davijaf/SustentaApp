import { Component, OnInit } from '@angular/core';

interface Desafio {
  titulo: string;
  descricao: string;
  ods: string;
}

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
  standalone: false
})
export class RecompensasPage implements OnInit {
  desafios: Desafio[] = [
    { titulo: 'Reduza o uso de plástico', descricao: 'Evite sacolas plásticas e prefira reutilizáveis hoje.', ods: 'ODS 12 - Consumo Responsável' },
    { titulo: 'Economize água', descricao: 'Tome banhos mais curtos e feche a torneira ao escovar os dentes.', ods: 'ODS 6 - Água Potável e Saneamento' },
    { titulo: 'Separe o lixo', descricao: 'Separe resíduos recicláveis do lixo comum em sua casa.', ods: 'ODS 12 - Consumo Responsável' },
    { titulo: 'Plante uma árvore', descricao: 'Contribua para o meio ambiente plantando uma árvore.', ods: 'ODS 15 - Vida Terrestre' },
    { titulo: 'Descarte eletrônico correto', descricao: 'Leve pilhas e eletrônicos usados a pontos de coleta.', ods: 'ODS 12 - Consumo Responsável' },
    { titulo: 'Economize energia', descricao: 'Desligue luzes e aparelhos que não estiver usando.', ods: 'ODS 7 - Energia Limpa' },
    { titulo: 'Use transporte sustentável', descricao: 'Opte por caminhar, pedalar ou transporte público.', ods: 'ODS 13 - Ação Climática' },
    { titulo: 'Evite desperdício de alimentos', descricao: 'Planeje refeições e aproveite sobras.', ods: 'ODS 2 - Fome Zero' },
    { titulo: 'Consuma local', descricao: 'Prefira produtos de produtores locais.', ods: 'ODS 12 - Consumo Responsável' },
    { titulo: 'Proteja rios e mares', descricao: 'Não jogue lixo em vias públicas ou corpos d’água.', ods: 'ODS 14 - Vida na Água' }
  ];
  desafioDoDia: Desafio | null = null;
  concluido = false;
  historico: { data: string, titulo: string, descricao: string, ods: string }[] = [];

  constructor() { }

  ngOnInit() {
    this.sortearDesafio();
    this.historico = JSON.parse(localStorage.getItem('historicoDesafios') || '[]');
  }

  sortearDesafio() {
    this.concluido = false;
    // Sorteio baseado na data para manter o mesmo desafio no dia
    const dia = new Date().toISOString().slice(0, 10);
    const seed = parseInt(dia.replace(/-/g, ''), 10);
    const idx = seed % this.desafios.length;
    this.desafioDoDia = this.desafios[idx];
  }

  marcarConcluido() {
    this.concluido = true;
    const registro = {
      data: new Date().toISOString(),
      titulo: this.desafioDoDia?.titulo || '',
      descricao: this.desafioDoDia?.descricao || '',
      ods: this.desafioDoDia?.ods || ''
    };
    this.historico.unshift(registro);
    localStorage.setItem('historicoDesafios', JSON.stringify(this.historico));
  }

  limparHistorico() {
    this.historico = [];
    localStorage.removeItem('historicoDesafios');
  }
}
