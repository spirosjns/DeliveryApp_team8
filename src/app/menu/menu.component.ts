import { Component, OnInit, QueryList, ɵisListLikeIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  quant = 0;
  cart = new Map();
  name:any;
  response:any;
  cost = 0;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: par => this.name = par['name']
    });
    this.service.findbyStore(this.name).subscribe(data => {
      this.response = data;
      //console.log(this.response);
      });
    localStorage.clear();
  }

  ngOnDestroy(): void {
    this.service.cart = this.cart;
    //console.log(this.service.cart);
    //console.log(this.cost);
  }

  additemtoCart(id: any, price: any): void {
    if(this.cart.has(id)) {
      this.quant = this.cart.get(id) + 1;
      this.cart.set(id, this.quant);
    } else {
      this.cart.set(id, 1);
    }
    this.cost = this.cost + price;
    //console.log(this.cost);
    //console.log(this.cart);
  }

  removeitemfromCart(id: any, price: any): void {
    if(this.cart.has(id)) {
      this.quant = this.cart.get(id) - 1;
      if(this.quant == 0){
        this.cart.delete(id);
      } else {
        this.cart.set(id, this.quant);
      }
      this.cost = this.cost - price;
    }
    //console.log(this.cost);
    //console.log(this.cart);
  }

  cartisnotEmpty(): boolean {
    return !(this.cart.size == 0);
  }

  emptyCart(): void {
    this.cart.clear();
    this.cost = 0;
    localStorage.clear();
    alert("The cart is empty!");
  }

}
