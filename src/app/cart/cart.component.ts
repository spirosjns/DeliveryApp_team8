import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  account:any;
  acc_email:any;
  name:any;
  store:any;
  cart:any;
  cost:any;
  key:any;
  val:any;
  paymentsArr = ["CASH", "WIRE_TRANSFER", "CREDIT_CARD"];
  payment:any;
  form = new FormGroup({payment: new FormControl()});
  orderItems: any[] = [];
  data:any;
  product:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.name= this.route.snapshot.paramMap.get('name');
    this.acc_email = this.route.snapshot.paramMap.get('email');
    this.cost= this.route.snapshot.paramMap.get('cost');
    //console.log(this.name);
    this.service.findStorebyName(this.name).subscribe((data:any) => {
      this.store = data;
      console.log(this.store);
    });
    this.service.getAccount(this.acc_email).subscribe((data:any) => {
      this.account = data;
      console.log(this.account);
    });
    //console.log(this.account);
    this.cart = this.service.getCart();
    console.log(this.cart);
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
    this.form = this.fb.group({
      payment: [null]
    });
    this.form.valueChanges
      .subscribe((f: any) => {
        this.onChange(f);
      });
  }

  show(x:any): boolean {
    //console.log(x[0]);
    //console.log(x.id);
    //console.log(x.id);
    if(this.cart.has(x.id)){
      //this.orderItems.push(x);
      //console.log(this.orderItems);
      return true;
    }
    else{
      return false;
    }
  }

  update(): void {
    for(let ind = 0; ind < this.store.data.products.length; ind++){
      this.product = this.store.data.products[ind];
      if(this.cart.has(this.product.id)){
        this.orderItems.push(this.product);
      }
    }
    console.log(this.orderItems);
  }

  cartisnotEmpty(): boolean {
    return !(this.cart.size == 0);
  }
  submit() {
    for(let ind = 0; ind < this.store.data.products.length; ind++){
      this.product = this.store.data.products[ind];
      if(this.cart.has(this.product.id)){
        this.orderItems.push(this.product);
      }
    }
    this.data = JSON.stringify({data:{
      account: this.account.data,
      store: this.store.data,
      //submitDate: null,
      orderItems: this.orderItems,
      paymentMethod: this.payment,
      cost: this.cost}
    })
    console.log(this.data);
    this.service.makeOrder(this.data);
    alert("Order was submitted successfully!");
    this.orderItems = [];
    this.router.navigate(['userhome']);
  }

  onChange(value:any) {
    this.payment = value;
    console.log(this.payment);
  }
}
