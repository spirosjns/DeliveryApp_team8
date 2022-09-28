import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  //id:any;
  account = {"id":1,"username":"Dimitris","password":"1234",
  "email":"dimitris@gmail.com","phoneNumber":"6998717438","age":24,
  "addresses":[{"id":1,"addressName":"Menedimou","city":"Chalkida","state":"Evia","zipcode":34100,"addressType":"BILLING"}]
  };
  storeName:any;
  store:any;
  cost:any;
  form:any;
  paymentsArr = ['CASH', 'WIRE_TRANSFER', 'CREDIT_CARD'];
  payment:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.storeName = this.route.snapshot.paramMap.get('name');
    this.cost = this.route.snapshot.paramMap.get('cost');
    //this.id = this.route.snapshot.paramMap.get('id');
    this.service.findbyStore(this.storeName).subscribe(data => {
      this.store = data;
    });
    /*this.service.getAccount(this.id).subscribe(data => {
      this.account = data;
    });*/
    this.form = this.fb.group({
      payment: [null]
    });
    this.form.get("payment").valueChanges
      .subscribe((f: any) => {
        this.onChange(f);
      })
  }


  submit() {
    console.log("Form Submitted");
  }

  onChange(value:any) {
    this.payment = value;
    console.log(this.payment);
  }
}
