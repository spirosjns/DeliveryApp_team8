import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcsService {

  name:any;
  storesUrl = `http://localhost:8080/stores`;
  productsUrl = `http://localhost:8080/products`;

  constructor(private httpclient: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.httpclient.get(this.productsUrl);
  }

  public getStores(): Observable<any> {
    return this.httpclient.get(this.storesUrl);
  }

  public findbyStore(name:string): Observable<any> {
    this.name = name;
    return this.httpclient.get(this.storesUrl, {
      params: new HttpParams().set('name', this.name)
    });
  }
}
