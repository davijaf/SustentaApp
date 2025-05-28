import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontuacaoPage } from './pontuacao.page';

const routes: Routes = [
  {
    path: '',
    component: PontuacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontuacaoPageRoutingModule {}
