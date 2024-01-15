import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = 'http://localhost:3000';
  insertURL = 'http://localhost:3000/insert';
  deleteURL = 'http://localhost:3000/delete';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.apiURL);
  }
  
  postInsert(data: any): Observable<any> {
    return this.http.post(this.insertURL, data);
  }

  postDelete(data: any): Observable<any> {
    return this.http.post(this.deleteURL, data);
  }

}
