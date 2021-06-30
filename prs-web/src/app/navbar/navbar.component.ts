import { Component, OnInit } from '@angular/core';
import { SystemService } from '../misc/system.service';
import { Navbar } from './navbar.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private syssvc: SystemService
    ) { }
    loggedInUser = this.syssvc.loggedInUser;
    user: string = "";
    display: boolean = false;
    navbar: Navbar[]=[
      new Navbar("Home", "/home"),
      new Navbar("Users", "/user/list"),
      new Navbar("Vendors", "/vendor/list"),
      new Navbar("Products", "/product/list"),
      new Navbar("Requests", `/request/list`)
    ]
  ngOnInit(): void {
    this.display = this.loggedInUser?.isReviewer == true ? true : false;
    this.user = this.loggedInUser?.firstname == null ? "none" : this.loggedInUser.firstname
  }
  nv: string = "navbar navbar-light bg-secondary bg-gradient"
}
