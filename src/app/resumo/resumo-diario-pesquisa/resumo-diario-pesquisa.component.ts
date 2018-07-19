import { Component, OnInit } from '@angular/core';
import { ResumoDiarioService, Filtro } from '../resumo-diario.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resumo-diario-pesquisa',
  templateUrl: './resumo-diario-pesquisa.component.html',
  styleUrls: ['./resumo-diario-pesquisa.component.css']
})
export class ResumoDiarioPesquisaComponent implements OnInit {

  filtro: Filtro;

  lancamentos = [];

  pt: any;

  loader = false;

  constructor(
    private resumoService: ResumoDiarioService,
    private title: Title
  ) { }

  ngOnInit() {

    this.title.setTitle('Pesquisa lançamento')

    this.carregarCalendar();

    this.filtro = new Filtro();

    this.listar();
    
  }

  public listar() {
    this.loader = true;
    this.lancamentos = [];
    this.resumoService.listar()
      .then(resultado => {
        setTimeout(() => {
          this.lancamentos = resultado;
          this.loader = false;
        }, 1000);
      })
      .catch(erro => {
        console.log(erro);
      })
  }

  public pesquisar() {
    this.loader = true;

    this.resumoService.pesquisar(this.filtro)
      .then(resultado => {
        setTimeout(() => {
          this.lancamentos = resultado;
          console.log(this.lancamentos);
          
          this.loader = false;
        }, 1000);
        
      })
    
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
  public limpar() {
    this.filtro = new Filtro();
    this.listar();
  }

}
