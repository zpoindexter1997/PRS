import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  constructor(
    private vendorsvc: VendorService,
    private activatedRoute: ActivatedRoute
   ) {
   }
   vendor!: Vendor;
   tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.vendorsvc.get(id).subscribe(
      res => {this.vendor = res; console.log("Vendor loaded successfuly!", res)},
      err => console.error(err))
  }

}
