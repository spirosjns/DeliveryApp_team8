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
  //famousStoresperCat:any;
  topProducts:any;
  account = {"id":1,"username":"Dimitris",
  "password":"1234","email":"dimitris@gmail.com",
  "phoneNumber":"6998717438","age":24,
  "address":"Menedimou","city":"Chalkida"};

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
