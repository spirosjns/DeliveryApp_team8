import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  store:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: par => this.store = par['name']
    });
  }

}
