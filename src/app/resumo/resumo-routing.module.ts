import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumoDiarioComponent } from './resumo-diario/resumo-diario.component';
import { ResumoMensalComponent } from './resumo-mensal/resumo-mensal.component';
import { ResumoDiarioPesquisaComponent } from './resumo-diario-pesquisa/resumo-diario-pesquisa.component';
import { ResumoDiarioCadastroComponent } from './resumo-diario-cadastro/resumo-diario-cadastro.component';

const routes: Routes = [
  { path: 'resumo-diario', component: ResumoDiarioComponent },
  { path: 'resumo-mensal', component: ResumoMensalComponent },
  { path: 'pesquisa', component: ResumoDiarioPesquisaComponent },
  { path: 'cadastro', component: ResumoDiarioCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumoDiarioRoutingModule { }
