import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { User } from 'src/app/user/user.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { PurchaseOrder } from '../purchaseorder.class';

@Component({
  selector: 'app-purchaseorder-list',
  templateUrl: './purchaseorder-list.component.html',
  styleUrls: ['./purchaseorder-list.component.css']
})
export class PurchaseorderListComponent implements OnInit {

  constructor(
    private vendorsvc: VendorService,
    private productsvc: ProductService,
    private syssvc: SystemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  user: User | null = null;
  purchaseOrders: PurchaseOrder[] = [];
  vendorPurchaseOrders: PurchaseOrder[] = [];
  products: Product[] = [];
  poProduct: Product | null = null;
  vendors: Vendor[] = [];
  poVendor: Vendor | null = null;

  ngOnInit(): void {
      this.user = this.syssvc.loggedInUser;
      this.productsvc.list().subscribe(
        res => {this.products = res; 
        console.debug("Products successfully loaded!", res)},
        err => {console.error(err)}
      )
      this.vendorsvc.list().subscribe(
        res => {this.vendors = res; 
        console.debug("Vendors successfully loaded!", res)},
        err => {console.error(err)}
      )
      const vendorId = +this.getId();
      for(let p of this.purchaseOrders){
        if(p.product?.vendorId === vendorId){
          this.vendorPurchaseOrders.push(p)
        }
      }
  }
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }


}
