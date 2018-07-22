import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('SCC-Indicadores');
  }

  // exibindoNavbar() {
  //   return this.router.url !== '/login';
  // }

  mobileMenuActive: boolean;

  onMobileMenuButton(event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }

}
