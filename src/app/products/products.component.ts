import { Component, OnInit } from '@angular/core';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any;

  constructor(private service: ProcsService) { }

  ngOnInit(): void {
    //this.service.getProducts().subscribe(data => {
    //  console.log(data);
    //  this.products = data;
    //})
  }

  showbyName(): void {

  }
}
