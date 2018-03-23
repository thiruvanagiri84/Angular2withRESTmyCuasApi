import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminsdataService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    console.log(this.http.get('http://localhost:8070/adminslist/2787'));
    return this.http.get('http://localhost:8070/adminslist/2787');
  }
}