import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from './unitService';
import { IUnit } from './unit';

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {
  faction: string;
  unitList: IUnit[];

  constructor(private route: ActivatedRoute, private unitService: UnitService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.faction = params['faction'];

      this.unitService.getUnitList(this.faction).subscribe(res => {
        this.unitList = res;
      });
    });
  }

  onBackClick() {
    return this.location.back();
  }
}
