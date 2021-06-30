import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
    private syssvc: SystemService,
    private router: Router
  ) {
  }
  newVendor = new Vendor();
  tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
  }
  create(): void {
    this.vendorsvc.create(this.newVendor).subscribe(
      res => { console.debug("Vendor created successfuly!", res);
      this.router.navigateByUrl("/vendor/list");
    },
      err => console.error(err))
  }

}
