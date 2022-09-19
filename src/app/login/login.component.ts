import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any;
  email:any;
  password:any;

  constructor(private auth:AuthService, private fb: FormBuilder, private router:Router) {
   }

  data = {
    "email": "john@company.com",
    "password": "p@ssw0rd"
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getData(): any {
    this.data.email = this.form.get("email");
    this.data.password = this.form.get("password");
    return this.login();
  }
  login(): void {
    this.auth.login(this.data).pipe(
      catchError(error => {
        alert(error);
        return EMPTY;
      }))
      .subscribe(result => {
        if (result.token) {
          this.router.navigateByUrl('stores');}    });
  }

}
