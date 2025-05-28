import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'pontuacao',
    loadChildren: () => import('./pontuacao/pontuacao.module').then( m => m.PontuacaoPageModule)
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./recompensas/recompensas.module').then( m => m.RecompensasPageModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./conteudo/conteudo.module').then( m => m.ConteudoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
