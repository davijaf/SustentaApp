import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false
})
export class QuizPage implements OnInit {
  perguntas = QUIZ;
  perguntaAtual = 0;
  pontuacao = 0;
  respondido = false;
  respostaSelecionada: number|null = null;
  quizFinalizado = false;
  nomeUsuario: string = '';
  nomeSalvo: boolean = false;

  constructor() { }

  ngOnInit() {}

  selecionarResposta(idx: number) {
    if (this.respondido || this.quizFinalizado) return;
    this.respostaSelecionada = idx;
    this.respondido = true;
    if (idx === this.perguntas[this.perguntaAtual].correta) {
      this.pontuacao += 10;
    }
  }

  proximaPergunta() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
      this.respostaSelecionada = null;
      this.respondido = false;
    } else {
      this.quizFinalizado = true;
    }
  }

  reiniciarQuiz() {
    this.perguntaAtual = 0;
    this.pontuacao = 0;
    this.respostaSelecionada = null;
    this.respondido = false;
    this.quizFinalizado = false;
    this.nomeUsuario = '';
    this.nomeSalvo = false;
  }

  salvarPontuacao() {
    if (!this.nomeUsuario || this.nomeUsuario.trim().length < 2) {
      alert('Por favor, insira seu nome para salvar a pontuação.');
      return;
    }
    const historico = JSON.parse(localStorage.getItem('ranking') || '[]');
    historico.push({ nome: this.nomeUsuario.trim(), data: new Date().toISOString(), pontos: this.pontuacao });
    localStorage.setItem('ranking', JSON.stringify(historico));
    this.nomeSalvo = true;
  }

}

interface QuizPergunta {
  pergunta: string;
  opcoes: string[];
  correta: number;
}

const QUIZ: QuizPergunta[] = [
  {
    pergunta: 'Qual destas ações mais contribui para a redução do lixo plástico nos oceanos?',
    opcoes: [
      'Usar sacolas plásticas descartáveis',
      'Descartar lixo em rios',
      'Reduzir, reutilizar e reciclar plásticos',
      'Queimar resíduos plásticos',
      'Enterrar plásticos em aterros'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual fonte de energia é considerada renovável?',
    opcoes: [
      'Carvão mineral',
      'Petróleo',
      'Energia solar',
      'Gás natural',
      'Energia nuclear'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é biodiversidade?',
    opcoes: [
      'Variedade de espécies de plantas e animais',
      'Quantidade de água nos rios',
      'Nível de poluição do ar',
      'Quantidade de lixo produzido',
      'Uso de combustíveis fósseis'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é o principal gás responsável pelo efeito estufa?',
    opcoes: [
      'Oxigênio',
      'Dióxido de carbono (CO₂)',
      'Nitrogênio',
      'Hidrogênio',
      'Ozônio'
    ],
    correta: 1
  },
  {
    pergunta: 'O que significa consumo consciente?',
    opcoes: [
      'Comprar sem pensar',
      'Desperdiçar recursos naturais',
      'Avaliar impactos ambientais antes de consumir',
      'Usar produtos descartáveis',
      'Ignorar a procedência dos produtos'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual destas atitudes economiza mais água em casa?',
    opcoes: [
      'Lavar calçada com mangueira',
      'Tomar banhos longos',
      'Reaproveitar água da chuva',
      'Deixar torneira aberta ao escovar os dentes',
      'Lavar roupa todos os dias'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é compostagem?',
    opcoes: [
      'Processo de queima de lixo',
      'Transformação de resíduos orgânicos em adubo',
      'Descarte de lixo eletrônico',
      'Uso de agrotóxicos',
      'Poluição do solo'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual destas práticas ajuda a preservar a fauna e flora?',
    opcoes: [
      'Desmatamento',
      'Caça predatória',
      'Criação de áreas protegidas',
      'Poluição dos rios',
      'Uso excessivo de fertilizantes'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é agricultura sustentável?',
    opcoes: [
      'Uso intensivo de agrotóxicos',
      'Plantio sem rotação de culturas',
      'Produção que respeita o meio ambiente e as pessoas',
      'Desmatamento para plantio',
      'Queima de resíduos agrícolas'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual destas ações reduz a poluição do ar nas cidades?',
    opcoes: [
      'Queimar lixo',
      'Usar transporte coletivo ou bicicleta',
      'Desmatar áreas verdes',
      'Usar carros antigos',
      'Construir mais estradas'
    ],
    correta: 1
  }
];

// ...adicione a lógica do quiz conforme necessário...
