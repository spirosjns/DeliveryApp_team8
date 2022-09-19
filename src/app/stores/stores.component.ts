import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  stores:any;

  constructor(private service: ProcsService) {}

  ngOnInit(): void {
    this.service.getStores().subscribe(data => {
      console.log(data);
      this.stores = data;
      })
  }

}
