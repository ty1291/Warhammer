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
  originalFactions: IFaction[];
  filteredFactions: IFaction[];

  uniqueTypes: any[];
  selectedType: string;

  constructor(private factionService: FactionService) { }

  ngOnInit() {
      this.factionService.getFactionList().subscribe(data => {
        this.originalFactions = data;
        this.filteredFactions = data;

        let filterFactionTypes = data.map(faction => {
          return faction.type;
        });

        this.uniqueTypes = filterFactionTypes.filter((item, pos) => {
          return filterFactionTypes.indexOf(item) === pos;
        })
        .map(item => {
          return { key: item, value: item };
        });
      });
  }

  filterFaction(type: string) {
    if (!type) {
      this.filteredFactions = this.originalFactions;
      return true;
    }

    this.filteredFactions = this.originalFactions.filter(faction => {
      return faction.type.toLocaleLowerCase() === type.toLocaleLowerCase();
    });
  }
}
