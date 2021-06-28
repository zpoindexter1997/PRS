import { Component, OnInit } from '@angular/core';
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
    private vendorsvc: VendorService
  ) { }
  vendors!: Vendor[];

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.log("Vendors loaded successfuly!", res)},
      err => console.error(err))
  }
}
