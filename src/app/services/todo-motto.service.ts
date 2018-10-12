import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoMottoService {
  baseUrl: string;
  constructor(private http: HttpClient){
    this.baseUrl = 'https://5bbf4f0572de1d001325376f.mockapi.io/api/fake-data/';
  }
  public getUserDataByParams(paramsData: any){
    let params = new HttpParams();
    for(let i in paramsData){
      params = params.set(i, paramsData[i]);
    }
    let headers = new HttpHeaders()
                  .set('Content-Type', 'application/json');
    return this.http.get(this.baseUrl+'/any-data',{headers, params});   
  }
}
