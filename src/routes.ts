import { Routes } from '@angular/router';

import { FactionsComponent } from './app/factions/factions.component';
import { HomeComponent } from './app/home/home.component';
import { UnitDetailComponent } from './app/factions/units/unit-detail.component';
import { UnitListComponent } from './app/factions/units/unit-list.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'unit-list/:faction', component: UnitListComponent },
  { path: 'unit-detail', component: UnitDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
