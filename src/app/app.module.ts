import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MainAppComponent } from './main-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';

import { FactionsComponent } from './factions/factions.component';
import { UnitListComponent } from './factions/units/unit-list.component';
import { UnitDetailComponent } from './factions/units/unit-detail.component';

import { appRoutes } from '../routes';
import { FactionService } from './factions/factionService';
import { UnitService } from './factions/units/unitService';

@NgModule({
  declarations: [
    MainAppComponent,
    FactionsComponent,
    NavBarComponent,
    HomeComponent,
    UnitListComponent,
    UnitDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FactionService,
    UnitService
  ],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
