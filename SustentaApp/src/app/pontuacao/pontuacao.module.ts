import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontuacaoPageRoutingModule } from './pontuacao-routing.module';

import { PontuacaoPage } from './pontuacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontuacaoPageRoutingModule
  ],
  declarations: [PontuacaoPage]
})
export class PontuacaoPageModule {}
