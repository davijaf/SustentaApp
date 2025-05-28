import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConteudoPageRoutingModule } from './conteudo-routing.module';

import { ConteudoPage } from './conteudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConteudoPageRoutingModule
  ],
  declarations: [ConteudoPage]
})
export class ConteudoPageModule {}
