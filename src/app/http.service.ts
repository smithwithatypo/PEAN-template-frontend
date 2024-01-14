import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
