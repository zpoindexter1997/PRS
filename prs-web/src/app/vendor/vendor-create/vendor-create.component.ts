import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) {
  }
  newVendor = new Vendor(0, "", "", "", "", "", "", "", "")
  tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
  }
  create(): void {
    this.vendorsvc.create(this.newVendor).subscribe(
      res => { console.log("Vendor created successfuly!", res) },
      err => console.error(err))
    this.router.navigateByUrl("/vendor/list");
  }

}
