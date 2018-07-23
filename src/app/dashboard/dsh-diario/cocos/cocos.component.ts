import { Component, OnInit, Input } from '@angular/core';
import { Dado, Cocos, Processados, DadosDiarios } from '../../dsh-model';
import { Filtro } from '../../../resumo/resumo-diario.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-cocos',
  templateUrl: './cocos.component.html',
  styleUrls: ['./cocos.component.css']
})
export class CocosComponent implements OnInit {


  dadosDiarios: DadosDiarios[] = [];

  labels: any[];
  data: any;


  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    
    this.dataset();


  }
  
  private carregarDados(){
    
  }

  public alterouData(event) {

    console.log(event);

  }
  
 


}
