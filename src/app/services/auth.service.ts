import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // use a fake api from reqres

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "http://localhost:8080/accounts";

  constructor(private http: HttpClient, public router: Router) { }

  login(data:any): Observable<any>{
    return this.http.post<any>(this.url, data, this.httpOptions).pipe(
      tap(result => this.save_token(result)),
      catchError(error => throwError(() => `Something went wrong: ${error.message}`))
    );
  }


  save_token(data: any): void {
    localStorage.setItem("token", data.token);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
