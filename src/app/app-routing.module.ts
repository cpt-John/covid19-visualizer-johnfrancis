import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { CountryDataComponent } from './country-data/country-data.component';
import { StateDataComponent } from './state-data/state-data.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', redirectTo: '/home/country', pathMatch: 'full' },
  {
    path: 'home',
    component: MainDisplayComponent,
    children: [
      {
        path: 'country',
        component: CountryDataComponent,
      },
      {
        path: 'state/:id',
        component: StateDataComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
