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

  // groupPO(requestlines: RequestLine[]): void{
  //   console.debug("RLs are: ", requestlines);
  //   if(this.requestLines[0].product){
  //     this.priceHolder = this.requestLines[0].product.price;
  //     this.nameHolder = this.requestLines[0].product.name;
  //     this.partHolder = this.requestLines[0].product.partNbr;
  //     this.po = new PurchaseOrder(
  //       this.priceHolder,
  //       this.nameHolder,
  //       this.partHolder,
  //       this.requestLines[0].quantity
  //       )
  //       console.debug("First PO: ", this.po)
  //       this.purchaseOrders.push(this.po)
  //     }
  //   for(let r of requestlines){
  //     console.debug("R is :", r)
  //     if(r.product){
  //       for(let po of this.purchaseOrders){
  //         console.debug("Loop PO is: ", this.po)
  //         if(r.product.name == po.productName){
  //           po.quantity += r.quantity;
  //           return;
  //         }
  //       }
  //       this.priceHolder = r.product.price;
  //       this.nameHolder = r.product.name;
  //       this.partHolder = r.product.partNbr;
  //     this.po = new PurchaseOrder(
  //       this.priceHolder,
  //       this.nameHolder,
  //       this.partHolder,
  //       r.quantity
  //       )
  //       this.purchaseOrders.push(this.po)
  //       }
  //   }
  //   console.debug("POs are: ", this.purchaseOrders)
  // }
}


