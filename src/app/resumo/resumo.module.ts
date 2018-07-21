import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { SharedModule } from '../shared/shared.module';
import { ResumoDiarioRoutingModule } from './resumo-routing.module';
import { ResumoDiarioCadastroComponent } from './resumo-diario-cadastro/resumo-diario-cadastro.component';
import { ResumoDiarioPesquisaComponent } from './resumo-diario-pesquisa/resumo-diario-pesquisa.component';
import { ResumoDiarioService } from './resumo-diario.service';
import { CoreModule } from '../core/core.module';
import { ResumoDiarioComponent } from './resumo-diario/resumo-diario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    PanelModule,
    ProgressSpinnerModule,
    ToolbarModule,
    CardModule,
    TooltipModule,

    SharedModule,
    CoreModule,
    ResumoDiarioRoutingModule
  ],
  declarations: [
    ResumoDiarioCadastroComponent, 
    ResumoDiarioPesquisaComponent, ResumoDiarioComponent
  ],
  exports:[],
  providers: [ResumoDiarioService]
})
export class ResumoModule { }
