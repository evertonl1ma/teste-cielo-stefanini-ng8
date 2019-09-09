import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap, delay } from 'rxjs/operators'
import { Constants } from '../utils/api';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getDataFunc() {
  	return this.http.get(`${Constants.SERVICE_URL}/lancamentos`,  httpOptions).pipe(
  							delay(3000),
  							tap(response => console.log(' response', response)),
  							map(response => response)
  							)
  }
}
