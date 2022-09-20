import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  name:any;
  store:any;
  cart:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.name = par['name']
    });
    this.service.findbyStore(this.name).subscribe(data => {
      this.store = data;
      console.log(this.store.data.products);
      });
    this.cart = this.service.cart;
    console.log(this.cart);
  }

  getProduct(productid:any): boolean {
    for (let id of this.cart.keys()) {
      if(productid == id){
        return true;
      }
    }
    return false;
  }
}
