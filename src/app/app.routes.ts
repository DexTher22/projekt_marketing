import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import * as loginComponent from './login/login.component';

export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: '', component:loginComponent.LoginComponent}
];
