import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUnit } from './unit';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnitService {
  constructor(private http: HttpClient) {

  }

  getUnitList(faction: string): Observable<IUnit[]> {
    return this.http.get<IUnit[]>('/api/getUnitList/' + faction);
  }

  getUnitDetails(unit: string): Observable<IUnit> {
    return this.http.get<IUnit>('/api/getUnitDetails/' + unit);
  }
}
