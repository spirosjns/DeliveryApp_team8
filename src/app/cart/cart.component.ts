import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cost:any;
  key:any;
  val:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {
    this.name= this.route.snapshot.paramMap.get('name');
    this.cost= this.route.snapshot.paramMap.get('cost');
    //console.log(this.cost);
    //console.log(this.name);
    this.service.findbyStore(this.name).subscribe((data:any) => {
      this.store = data;
    });
    //console.log(localStorage);
    this.cart = this.service.getCart();
    //console.log(this.cart);
    if(this.cart != null){
      for (let x of this.cart.keys()){
        //console.log(x);
        localStorage.setItem(x, this.cart.get(x));
        //console.log(localStorage.getItem(x));
      }
    }
    else {
      this.cart = new Map();
      for(let i=0; i < localStorage.length; i++){
        this.key = localStorage.key(i);
        this.val = localStorage.getItem(this.key);
        //console.log(+this.key);
        this.cart.set(+this.key, +this.val);
      }
    }
  }

  show(x:any): boolean {
    //console.log(this.cart);
    //console.log(x.id);
    if(this.cart.has(x.id)){
      //console.log('hi');
      return true;
    }
    else{
      return false;
    }
  }

  cartisnotEmpty(): boolean {
    return !(this.cart.size == 0);
  }
}
