import { Component, Input, OnInit } from '@angular/core';
import { PurchaseOrder } from '../purchaseorder.class';

@Component({
  selector: 'app-purchaseorder-create',
  templateUrl: './purchaseorder-create.component.html',
  styleUrls: ['./purchaseorder-create.component.css']
})
export class PurchaseorderCreateComponent implements OnInit {
 
  @Input()
  purchaseOrder!: PurchaseOrder;
  constructor() { }

  ngOnInit(): void {
  }

}
