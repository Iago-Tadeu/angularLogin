import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './Pages/login-view/login-view.component';
import { HomeViewComponent } from './Pages/home/home.view.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },
    { path: 'first-component', component: HomeViewComponent },
    {
        path: "home", component: HomeViewComponent
    },
    {
        path: "login", component: LoginViewComponent,
    }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export class AppRoutingModule { }
