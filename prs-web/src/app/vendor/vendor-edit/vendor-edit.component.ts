import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  constructor(
    private vendorsvc: VendorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ) {
   }
   vendor!: Vendor;
   tbl: string = "table table-dark table-striped"
   
   ngOnInit(): void {
     const id = this.getId();
     this.vendorsvc.get(id).subscribe(
       res => {this.vendor = res; console.log("Vendor loaded successfuly!", res)},
       err => console.error(err))
   }
 
   save(): void{
     const id = this.getId();
     this.vendorsvc.update(this.vendor).subscribe(
       res => {this.vendor = res; console.log("Vendor deleted successfuly!", res)},
       err => console.error(err))
       this.router.navigateByUrl("/vendor/list");
   }
   delete(): void{
     const id = this.getId();
     this.vendorsvc.delete(id).subscribe(
       res => {this.vendor = res; console.log("Vendor deleted successfuly!", res)},
       err => console.error(err))
       this.router.navigateByUrl("/vendor/list");
   }
 
   getId(): number{
     const routeParams = this.activatedRoute.snapshot.paramMap;
     const id = Number(routeParams.get('id'))
     return id;
   }
}
