import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcsService {

  name:any;
  storesUrl = `http://localhost:8080/stores`;
  ordersUrl = `http://localhost:8080/orders`;

  constructor(private http: HttpClient) { }

  //public getProducts(): Observable<any> {
  //  return this.httpclient.get(this.productsUrl);
  //}

  public makeOrder(payload: { id: any; quantity: any; }): Observable<any> {
    return this.http.post(this.ordersUrl, payload);
  }

  public getStores(): Observable<any> {
    return this.http.get(this.storesUrl);
  }

  public findbyStore(name:string): Observable<any> {
    this.name = name;
    return this.http.get(this.storesUrl, {
      params: new HttpParams().set('name', this.name)
    });
  }
}
