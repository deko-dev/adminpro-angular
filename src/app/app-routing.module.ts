import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages/pages-routing.module';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Nopage404Component } from './nopage404/nopage404.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: Nopage404Component },
];
@NgModule({
    imports: [
        PagesRoutingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
