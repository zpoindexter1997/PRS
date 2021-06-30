import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  tbl: string = "table table-dark table-striped"

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }
  products!: Product[];
  vendors: Vendor[] = [];

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors successfully loaded!", res)},
      err => {console.error(err)})
    this.productsvc.list().subscribe(
      res => {this.products = res; console.debug("Products loaded successfuly!", res)},
      err => console.error(err))
  }
  defaultImg: string = "assets/img/handneutral.png";
  upImg: string = "assets/img/handup.png";
  downImg: string = "assets/img/handdown.png";
  idImg: string = this.defaultImg;
  nameImg: string = this.defaultImg;
  partNbrImg: string = this.defaultImg;
  priceImg: string = this.defaultImg;
  photoImg: string = this.defaultImg;
  unitImg: string = this.defaultImg;
  vendorIdImg: string = this.defaultImg;

  searchCriteria: string = "";

  sortColumn: string = "id";
  sortAsc: boolean = true;

  sortFn(column: string): void {
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      this.imgSwitch(column);
      return;
    }
    this.sortAsc = true;
    this.sortColumn = column;
    this.imgReset();
    this.imgSwitch(column);
}

imgReset(): void{
  this.idImg = this.defaultImg;
  this.nameImg = this.defaultImg;
  this.partNbrImg = this.defaultImg;
  this.priceImg = this.defaultImg;
  this.photoImg = this.defaultImg;
  this.unitImg = this.defaultImg;
  this.vendorIdImg = this.defaultImg;
}

  imgSwitch(column: string): void {
    switch(column){
      case('id') : this.idImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('name') : this.nameImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('partNbr') : this.partNbrImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('price') : this.priceImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('photo') : this.photoImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('unit') : this.unitImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('vendorId') : this.vendorIdImg = this.sortAsc ? this.upImg : this.downImg; break;
  }
};

}
