import { Component, OnInit } from '@angular/core';
import { DicaWikiService } from './dica-wiki.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
  standalone: false
})
export class ConteudoPage implements OnInit {
  dica: any = null;
  carregando = true;

  constructor(private dicaWiki: DicaWikiService) { }

  ngOnInit() {
    this.dicaWiki.getDicaAleatoria().subscribe(res => {
      this.dica = res;
      this.carregando = false;
    }, err => {
      this.dica = { title: 'Erro', extract: 'Não foi possível carregar a dica ambiental.' };
      this.carregando = false;
    });
  }
}
