import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline.service';
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
    private requestlinesvc: RequestLineService,
    private vendorsvc: VendorService,
    private productsvc: ProductService,
    private syssvc: SystemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  tbl: string = "table table-dark table-striped";

vendor!: Vendor;
requestLines!: RequestLine[];
purchaseOrders: PurchaseOrder[] = [];
totals: number[] = [];
po!: PurchaseOrder;
priceHolder: number = 0;
nameHolder: string = "";
partHolder: number = 0;


  ngOnInit(): void {
    this.requestlinesvc.polist(this.getId()).subscribe(
      res => {console.debug("POs are", res);
        this.purchaseOrders = res;
        // this.groupPO(res);
        this.calculateTotal(this.purchaseOrders);},
      err => console.error(err)
    )
    this.vendorsvc.get(this.getId()).subscribe(
      res => {console.debug(res); this.vendor = res},
      err => console.error(err)
    )
  }

  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

  calculateTotal(purchaseOrders: PurchaseOrder[]): void{
    let total = 0;
    for(let po of this.purchaseOrders){
      total = po.price * po.quantity;
      this.totals.push(total);
    }
  }
}


