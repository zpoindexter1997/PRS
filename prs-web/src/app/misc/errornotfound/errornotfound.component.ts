import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-errornotfound',
  templateUrl: './errornotfound.component.html',
  styleUrls: ['./errornotfound.component.css']
})
export class ErrornotfoundComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private syssvc: SystemService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navToHome(): void{
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.router.navigateByUrl("/home");
  }


}
