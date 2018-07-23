import { Component, OnInit } from '@angular/core';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  items = [];

  constructor(
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Dashboard');
    this.carregarMenu();
  }

  private carregar() {
    
  }
  private carregarMenu() {
    this.items = [
      { label: 'Diário', icon: 'fa fa-fw fa-bar-chart', routerLink: ['dsh-diario'] },
      { label: 'Mensal', icon: 'fa fa-fw fa-bar-chart', routerLink: ['dsh-mensal'] },

    ]
  }
}
