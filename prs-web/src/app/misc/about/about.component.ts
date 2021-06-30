import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private syssvc: SystemService,
    private router: Router
  ) { }
  image: string = "assets/img/monkey-creation.jpg";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.toggleImage();
  }

  toggleImage(): void {
      $("img").fadeIn(60000)
  }
}
