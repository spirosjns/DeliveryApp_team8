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

  constructor(private service: ProcsService) {}

  ngOnInit(): void {
    localStorage.clear();
    this.service.getStores().subscribe(data => {
      this.stores = data;
      })
  }

}
