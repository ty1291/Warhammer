import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitService } from './unitService';
import { IUnit } from './unit';

@Component({
  selector: 'unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {
  unit: string;
  unitDetails: IUnit;

  constructor(private route: ActivatedRoute, private unitService: UnitService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.unit = params['unit'];

      this.unitService.getUnitDetails(this.unit).subscribe(res => {
        var self = this;
        self.unitDetails = res;
      });
    });
  }

  onBackClick() {
    this.location.back();
  }
}
