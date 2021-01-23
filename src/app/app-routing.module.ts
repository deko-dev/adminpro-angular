import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Routings Modules
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { Nopage404Component } from './nopage404/nopage404.component';

const routes: Routes = [
    
    // path: '/dashboard' PageRouting
    // path: '/auth' AuthRouting

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: Nopage404Component },
];
@NgModule({
    imports: [
        PagesRoutingModule,
        AuthRoutingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
