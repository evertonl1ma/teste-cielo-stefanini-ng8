import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChartServicee {

  constructor(private http: HttpClient) { }

  getDataFunc() {
  	return this.http.get('http://localhost:4200/src/app/services/dados.json')
  		.pipe(
  			map(response => response)
  		)
  }
}
