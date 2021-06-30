import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
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
   tbl: string = "table table-dark table-striped";
   display: boolean = false;
   loggedInUser = this.syssvc.loggedInUser;
   
   ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.display = this.loggedInUser?.isAdmin == true ? true : false;
     const id = this.getId();
     this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors successfully loaded!", res)},
      err => {console.error(err)})
     this.productsvc.get(id).subscribe(
       res => {this.product = res; console.debug("Product loaded successfuly!", res)},
       err => console.error(err))
   }

   getId(): number{
     const routeParams = this.activatedRoute.snapshot.paramMap;
     const id = Number(routeParams.get('id'))
     return id;
   }
  delete(): void{
    const id = this.getId();
    this.productsvc.delete(id).subscribe(
      res => {this.product = res; console.debug("Product deleted successfuly!", res);
      this.router.navigateByUrl("/product/list");
    },
      err => console.error(err))
  }
}
