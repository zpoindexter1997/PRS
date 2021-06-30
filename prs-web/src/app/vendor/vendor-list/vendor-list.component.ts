import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  tbl: string = "table table-dark table-striped"

  constructor(
    private vendorsvc: VendorService,
    private syssvc: SystemService,
    private router: Router
  ) { }
  vendors!: Vendor[];

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors loaded successfuly!", res)},
      err => console.error(err))
  }

  defaultImg: string = "assets/img/handneutral.png";
  upImg: string = "assets/img/handup.png";
  downImg: string = "assets/img/handdown.png";
  idImg: string = this.defaultImg;
  codeImg: string = this.defaultImg;
  nameImg: string = this.defaultImg;
  addressImg: string = this.defaultImg;
  cityImg: string = this.defaultImg;
  stateImg: string = this.defaultImg;
  zipImg: string = this.defaultImg;
  phoneImg: string = this.defaultImg;
  emailImg: string = this.defaultImg;

  searchCriteria: string = "";

  sortColumn: string = "id";
  sortAsc: boolean = true;

  sortFn(column: string): void {
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      this.imgSwitch(column);
      return;
    }
    this.sortAsc = true;
    this.sortColumn = column;
    this.imgReset();
    this.imgSwitch(column);
}

imgReset(): void{
  this.idImg = this.defaultImg;
  this.codeImg = this.defaultImg;
  this.nameImg = this.defaultImg;
  this.addressImg = this.defaultImg;
  this.cityImg = this.defaultImg;
  this.stateImg = this.defaultImg;
  this.zipImg = this.defaultImg;
  this.phoneImg = this.defaultImg;
  this.emailImg = this.defaultImg;
}

  imgSwitch(column: string): void {
    switch(column){
      case('id') : this.idImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('code') : this.codeImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('name') : this.nameImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('address') : this.addressImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('city') : this.cityImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('state') : this.stateImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('zip') : this.zipImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('phone') : this.phoneImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('email') : this.emailImg = this.sortAsc ? this.upImg : this.downImg; break;
  }
};
}
