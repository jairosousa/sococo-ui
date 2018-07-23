import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Filtro } from '../../resumo/resumo-diario.service';
import { DashboardService } from '../dashboard.service';
import { DadosDiarios, Dado, Cocos, Processados } from '../dsh-model';

@Component({
  selector: 'app-dsh-diario',
  templateUrl: './dsh-diario.component.html',
  styleUrls: ['./dsh-diario.component.css']
})
export class DshDiarioComponent implements OnInit {
  
  filtro: Filtro = new Filtro;
  
  dadosDiarios: DadosDiarios[] = [];

  cocos: any

  pt: any;

  //cocos: Cocos = new Cocos();



  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.carregarCalendar();
    this.filtro.dataLancamento = new Date('2018-07-18');
    this.pesquisar();
  }

  public pesquisar() {

    let processados: any;
    let desfibrados: any;

    this.dashboardService.pesquisar(this.filtro)
      .then(dadosDiarios => {
        console.log(dadosDiarios);
        this.dadosDiarios = dadosDiarios;

        // this.dadosDiarios = dadosDiarios;
         this.dadosDiarios.forEach(dado => {
          processados = dado.processados;
          desfibrados = dado.desfibrados;
           
           
        })
        
        this.datasetCocos(processados, desfibrados);

      })

  }

  private datasetCocos(processados, desfibrados) {

    let dia = [];
    let totalProc = []
    processados.forEach(element => {
      dia.push(element.dia);
      totalProc.push(element.total);
      
    });

    let totalDesf = []
    desfibrados.forEach(element => {
      totalDesf.push(element.total);
    });

   
    this.cocos = {
      labels: dia,
      datasets: [
        {
          label: 'Cocos Processados',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: totalProc
        },
        {
          label: 'Cocos desfibrados',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: totalDesf
        }
      ]
    }
  }


  private carregarCalendar() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      clear: 'Limpar'
    };

}
}
