import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar.class';

@Component({
  selector: 'app-navbaritem',
  templateUrl: './navbaritem.component.html',
  styleUrls: ['./navbaritem.component.css']
})
export class NavbaritemComponent implements OnInit {

  @Input()
  navbar!: Navbar;
  constructor() { }

  ngOnInit(): void {
  }

}
