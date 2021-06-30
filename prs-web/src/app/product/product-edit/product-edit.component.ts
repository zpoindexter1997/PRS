import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productsvc: ProductService,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private vendorsvc: VendorService,
    private router: Router
   ) {
   }
   product!: Product;
   vendors: Vendor[] = [];
   tbl: string = "table table-dark table-striped"
   
   ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
     const id = this.getId();
     this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors successfully loaded!", res)},
      err => {console.error(err)})
     this.productsvc.get(id).subscribe(
       res => {this.product = res; console.debug("Product loaded successfuly!", res)},
       err => console.error(err))
   }
 
   save(): void{
     const id = this.getId();
     this.product.vendorId = +this.product.vendorId;
     this.productsvc.update(this.product).subscribe(
       res => {this.product = res; console.debug("Product updated successfuly!", res);
       this.router.navigateByUrl("/product/list");
      },
       err => console.error(err))
   }
 
   getId(): number{
     const routeParams = this.activatedRoute.snapshot.paramMap;
     const id = Number(routeParams.get('id'))
     return id;
   }

}
