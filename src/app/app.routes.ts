import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "loginView"
    },
    {
        path: "loginView", component: LoginComponent
    }
];
