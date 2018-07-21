import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  items = [
            {label: 'Diario', icon: 'fa-link', routerLink: ['/resumo']},
            {label: 'mensal', icon: 'fa-paint-brush', routerLink: ['/cadastro'], routerLinkActive:"ativo"}
        ];

  items_cad = [
    { label: 'Diario', icon: 'fa-link', routerLink: ['/cadastro']},
        ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    // this.logoutService.logout()
    //   .then(() => {
    //     this.router.navigate(['/login']);
    //   })
    //   .catch(erro => this.errorHandler.handle(erro));
  }

}
