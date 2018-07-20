import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Lancamento } from './model';

@Injectable({
  providedIn: 'root'
})
export class ResumoDiarioService {

  resumoUrl = environment.baseUrl;

  constructor(
    private http: Http
  ) { }

  public adicionar(resumoDiario: any): Observable<any> {
    //const headers: Headers = new Headers();
    //headers.append('Content-type', 'application/json')
    return this.http.post(
      `${this.resumoUrl}/lancamento-do-dia`,
      resumoDiario);
  }

  listar(): Promise<any> {
    return this.http.get(`${this.resumoUrl}/lancamentos`)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        Promise.reject(`Erro ao acessar base de dados.`)
      })
  }

  public pesquisar(filtro: Filtro): Promise<Lancamento[]> {

    const params = new URLSearchParams();

    if (filtro.dataLancamento) {
      params.set('dataLancamento',
        moment(filtro.dataLancamento).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.resumoUrl}/buscaPorData`,
      { search: params })
      .toPromise()
      .then(response => {
        const lancamentos = response.json() as Lancamento[];
        return lancamentos;
      });

  }

}

export class Filtro {
  dataLancamento: Date;
}

