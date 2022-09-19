import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name:any;
  response:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: par => this.name = par['name']
    });
    this.service.findbyStore(this.name).subscribe(data => {
      this.response = data;
      });
  }

}
