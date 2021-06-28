import { Component, OnInit } from '@angular/core';
import { SystemService } from '../misc/system.service';
import { Navbar } from './navbar.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar: Navbar[]=[
    new Navbar("Home", "/home"),
    new Navbar("Users", "/user/list"),
    new Navbar("Vendors", "/vendor/list"),
    new Navbar("Products", "/product/list"),
    new Navbar("Requests", "/request/list"),
    new Navbar("Log Out", "/login")
  ]
  constructor(
    private syssvc: SystemService
  ) { }
  loggedInUser = this.syssvc.loggedInUser;
  ngOnInit(): void {
  }
  nv: string = "navbar navbar-dark bg-dark"
}
