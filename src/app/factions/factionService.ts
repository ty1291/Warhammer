import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IFaction } from './faction';

@Injectable()
export class FactionService {
  constructor(private http: HttpClient) {

  }

  getFactionList(): Observable<IFaction[]> {
    return this.http.get<IFaction[]>('/api/getFactionList');
  }
}
