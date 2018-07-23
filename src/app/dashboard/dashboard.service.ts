import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { Filtro } from '../resumo/resumo-diario.service';
import { DadosDiarios } from './dsh-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardUrl = `${environment.baseUrl}/dashboard`;

  constructor(
    private http: Http,
  ) {}


  listar(): Promise<any> {
    return this.http.get(`${this.dashboardUrl}/dia`)
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(erro => {
        Promise.reject(`Erro ao acessar base de dados.`)
      })
  }

  public pesquisar(filtro: Filtro): Promise<DadosDiarios[]> {

    const params = new URLSearchParams();

    if (filtro.dataLancamento) {
      params.set('dataLancamento',
        moment(filtro.dataLancamento).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.dashboardUrl}/dia`,
      { search: params })
      .toPromise()
      .then(response => {
        const dadosDiarios = response.json() as DadosDiarios[];
        console.log(dadosDiarios);
        return dadosDiarios;
      });

  }


}
