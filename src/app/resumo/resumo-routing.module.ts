import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumoDiarioCadastroComponent } from './resumo-diario-cadastro/resumo-diario-cadastro.component';
import { ResumoDiarioPesquisaComponent } from './resumo-diario-pesquisa/resumo-diario-pesquisa.component';

const routes: Routes = [
  { path: 'resumo', component: ResumoDiarioPesquisaComponent },
  { path: 'cadastro', component: ResumoDiarioCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumoDiarioRoutingModule { }
