import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResumoDiarioService, Filtro } from '../resumo-diario.service';
import { Sococo, Acqua, Amafibra } from '../model';
import { THROW_IF_NOT_FOUND } from '../../../../node_modules/@angular/core/src/di/injector';
import { lang } from '../../../../node_modules/moment';

@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.component.html',
  styleUrls: ['./resumo-diario.component.css']
})
export class ResumoDiarioComponent implements OnInit {

  loader: boolean;

  filtro = new Filtro();

  lancamentos = [];

  pt: any;

  sococo: Sococo;
  acqua: Acqua;
  amafibra: Amafibra;

  constructor(
    private resumoService: ResumoDiarioService,
    private title: Title
  ) { }

  ngOnInit() {
    this.carregarCalendar();
    this.carregarData();
  }

  private carregarData() {
    this.filtro.dataLancamento = new Date("2018-07-19");
    this.pesquisar();
  }

  public pesquisar() {
    this.loader = true;

    this.resumoService.pesquisar(this.filtro)
      .then(lancamentos => {

        console.log(lancamentos);
        

        lancamentos.forEach(lancamento => {
          this.sococo = new Sococo(
            lancamento.cocosDesfibrados,
            lancamento.cocosProcessados,
            lancamento.cri,
            lancamento.flococo,
            lancamento.oleoIndustrialTipoA,
            lancamento.oleoIndustrialETE,
            lancamento.torta
          )

          this.acqua = new Acqua(
            lancamento.aguaDeCocoSococo,
            lancamento.aguaDeCocoVerde,
            lancamento.procentagemCocoGerminado,
            lancamento.totalDeCacambas,
            lancamento.caixaPadrao
          )

          this.amafibra = new Amafibra(
            lancamento.numeroDeFardos
          )


        })

        this.lancamentos.push(this.sococo);
        this.lancamentos.push(this.acqua);
        this.lancamentos.push(this.amafibra);
        console.log(this.lancamentos);
        
        setTimeout(() => {
          this.loader = false;
        }, 100);
        //this.lancamentos = resultado;

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
    this.carregarData();
  }


}
