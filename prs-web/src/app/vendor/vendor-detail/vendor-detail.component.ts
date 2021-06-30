import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
   ) {
   }
   vendor!: Vendor;
   tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.vendorsvc.get(id).subscribe(
      res => {this.vendor = res; console.debug("Vendor loaded successfuly!", res)},
      err => console.error(err))
  }
  delete(): void{
    const id = this.getId();
    this.vendorsvc.delete(id).subscribe(
      res => {this.vendor = res; console.debug("Vendor deleted successfuly!", res)},
      err => console.error(err))
      this.router.navigateByUrl("/vendor/list");
  }
   
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

}
