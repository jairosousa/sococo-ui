import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResumoModule } from './resumo/resumo.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppSideBarComponent } from './app.sidebar.component';
import { AppTopBarComponent } from './app.topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppSideBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResumoModule,
    DashboardModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
