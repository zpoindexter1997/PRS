import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
  }

}
