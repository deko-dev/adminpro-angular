import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent
  ],
  exports : [
    DashboardComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
