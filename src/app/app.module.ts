import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainAppComponent } from './main-app.component';
import { FactionsComponent } from './factions/factions.component';
import { NavBarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { UnitsComponent } from './factions/units/units.component';

import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    MainAppComponent,
    FactionsComponent,
    NavBarComponent,
    HomeComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
