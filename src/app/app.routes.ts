import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: 'register', component:RegisterComponent}

];
