import { Component, OnInit } from '@angular/core';
import { FactionService } from './factionService';
import { IFaction } from './faction';
import 'rxjs/add/operator/map';

@Component({
  selector: 'factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {
  factions: IFaction[];

  constructor(private factionService: FactionService) { }

  ngOnInit() {
      this.factionService.getFactionList().subscribe(data => {
          this.factions = data;
      });
  }
}
