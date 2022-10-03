import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcsService {

  cart:any;
  name:any;
  id:any;
  accountsUrl = `http://localhost:8080/accounts`;
  storesUrl = `http://localhost:8080/stores`;
  ordersUrl = `http://localhost:8080/orders`;

  constructor(private http: HttpClient) { }

  public makeOrder(data:any): Observable<any> {
    return this.http.post(this.ordersUrl, data);
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

  public getAccount(id:number): Observable<any> {
    this.id = id;
    return this.http.get(this.accountsUrl, {
      params: new HttpParams().set('id', this.id)
    })
  }

  public getCart(): Map<any,any> {
    return this.cart;
  }

  public getOrders(): Observable<any> {
    return this.http.get(this.ordersUrl);
  }
}
