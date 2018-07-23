import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DshDiarioComponent } from './dsh-diario/dsh-diario.component';
import { DshMensalComponent } from './dsh-mensal/dsh-mensal.component';
import { CocosComponent } from './dsh-diario/cocos/cocos.component';
import { CriFlococoComponent } from './dsh-diario/cri-flococo/cri-flococo.component';
import { DashboardService } from './dashboard.service';
import { ToolbarModule } from '../../../node_modules/primeng/toolbar';
import { CalendarModule } from '../../../node_modules/primeng/calendar';
import { TooltipModule } from '../../../node_modules/primeng/tooltip';
import { HttpModule } from '../../../node_modules/@angular/http';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DashboardRoutingModule,
    ChartModule,
    TabMenuModule,
    ToolbarModule,
    TooltipModule,
    CalendarModule,
    
  ],
  declarations: [DashboardComponent, DshDiarioComponent, DshMensalComponent, CocosComponent, CriFlococoComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
