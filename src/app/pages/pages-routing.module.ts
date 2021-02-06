import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {titlePage: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {titlePage: 'ProgressBar'} },
            { path: 'grafic1', component: Grafic1Component, data: {titlePage: 'Grafica #1'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titlePage: 'Ajustes de Cuenta'} },
            { path: 'promesas', component: PromesasComponent, data: {titlePage: 'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data: {titlePage: 'Rxjs'} },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
