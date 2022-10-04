import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcsService {

  id:any;
  cart:any;
  name:any;
  email:any;
  order:any;
  accountsUrl = `http://localhost:8080/accounts`;
  storesUrl = `http://localhost:8080/stores`;
  ordersUrl = `http://localhost:8080/orders`;

  constructor(private http: HttpClient) { }

  public makeOrder(data:any): Observable<any> {
    this.order = data;
    console.log(this.order);
    return this.http.post(this.ordersUrl, this.order);
  }

  public getStores(): Observable<any> {
    return this.http.get(this.storesUrl);
  }

  public findStorebyName(name:string): Observable<any> {
    this.name = name;
    return this.http.get(this.storesUrl, {
      params: new HttpParams().set('name', this.name)
    });
  }

  public findStorebyId(id:any): Observable<any> {
    this.id = id;
    return this.http.get(this.storesUrl, {
      params: new HttpParams().set('storeId', this.id)
    });
  }

  public getAccount(email:string): Observable<any> {
    this.email = email;
    return this.http.get(this.accountsUrl, {
      params: new HttpParams().set('email', this.email)
    })
  }

  public getCart(): Map<any,any> {
    return this.cart;
  }

  public getOrders(): Observable<any> {
    return this.http.get(this.ordersUrl);
  }

  public getallOrdersbyAccount(acc_id:any): Observable<any> {
    this.id = acc_id;
    return this.http.get(this.ordersUrl + '/retrieveAllOrders/' + this.id);
  }

  public getMostFamousStores(): Observable<any> {
    return this.http.get(this.storesUrl + '/reportFamousStores');
  }

  public getMostFamousStoresperCategory(id:any): Observable<any> {
    return this.http.get(this.storesUrl + '/reportFamousStoresPerCategory?id=' + id);
  }

  public top10products(): Observable<any> {
    return this.http.get(this.storesUrl + '/reportTop10Products');
  }
}
