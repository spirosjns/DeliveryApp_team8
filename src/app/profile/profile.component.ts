import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcsService } from '../services/procs.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  acc_email:any;
  account:any;

  constructor(private route:ActivatedRoute, private service:ProcsService,
    private router:Router) { }

  ngOnInit(): void {
    this.acc_email = this.route.snapshot.paramMap.get('email');
    this.service.getAccount(this.acc_email).subscribe((data:any) => {
      this.account = data;
      console.log(this.account);
    });
  }

}
