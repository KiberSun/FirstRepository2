import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  
  get(){
    const  req = this.http.get('http://localhost:8000/myroute');
    return req;
  }

}
