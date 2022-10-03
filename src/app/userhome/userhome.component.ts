import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  stores:any;
  famousStores:any;
  topProducts:any;
  account = {"id":2,"username":"Spyros","password":"8796","email":"spys@gmail.com","phoneNumber":"6998743817","age":24,"address":"Kolokotroni","city":"Patras"};

  constructor(private service: ProcsService) {}

  ngOnInit(): void {
    localStorage.clear();
    this.service.getStores().subscribe(data => {
      this.stores = data;
      })
    this.service.getMostFamousStores().subscribe(data => {
      this.famousStores = data;
      console.log(this.famousStores.data);
      })
    this.service.top10products().subscribe(data => {
      this.topProducts = data;
      console.log(this.famousStores.data);
      })
  }

  /*show(cat:any): void {
    this.service.getMostFamousStoresperCategory(cat).subscribe(data => {
      this.famousStoresperCat = data;
      console.log(this.famousStores.data);
      })
  }*/
}
