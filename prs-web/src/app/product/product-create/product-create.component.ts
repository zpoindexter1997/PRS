import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productsvc: ProductService,
    private syssvc: SystemService,
    private vendorsvc: VendorService,
    private router: Router
  ) {
  }

  vendors: Vendor[] = []
  newProduct = new Product();
  tbl: string = "table table-dark table-striped";
  vendorId: number = 0;

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors successfully loaded!", res)},
      err => {console.error(err)}
    )
  }
  
  create(): void {
    console.debug(this.newProduct)
    this.newProduct.vendorId = +this.newProduct.vendorId;
    this.productsvc.create(this.newProduct).subscribe(
      res => { console.debug("Product created successfuly!", res);
      this.router.navigateByUrl("/product/list");
    },
      err => console.error(err))
  }
}
