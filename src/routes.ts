import { Routes } from '@angular/router';

import { FactionsComponent } from './app/factions/factions.component';
import { HomeComponent } from './app/home/home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'factions', component: FactionsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
