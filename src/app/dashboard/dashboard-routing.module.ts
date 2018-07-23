import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DshDiarioComponent } from './dsh-diario/dsh-diario.component';
import { DshMensalComponent } from './dsh-mensal/dsh-mensal.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: "", component: DshDiarioComponent },
      { path: "dsh-diario", component: DshDiarioComponent },
      { path: "dsh-mensal", component: DshMensalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
