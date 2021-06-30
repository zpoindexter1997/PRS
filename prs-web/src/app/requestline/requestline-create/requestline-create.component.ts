import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  constructor(
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService
  ) {
  }
  newRequestLine = new RequestLine();
  products: Product[] = [];
  tbl: string = "table table-dark table-striped";
  loggedInUserId = this.syssvc.loggedInUser?.id;
  requestId: number = 0;
  product!: Product;
  

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.productsvc.list().subscribe(
      res => {this.products = res; console.debug("Products loaded successfully!", res)},
      err => {console.error(err)}
    )
    this.requestId = this.getId();

  }
  create(): void {
    this.newRequestLine.requestId = this.requestId;
    this.newRequestLine.productId = +this.newRequestLine.productId;
    console.debug(this.newRequestLine);
    this.requestlinesvc.create(this.newRequestLine).subscribe(
      res => { console.debug("Request Line created successfuly!", res);this.router.navigateByUrl(`/request/lines/${this.getId()}`); },
      err => console.error(err))
  }
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }
}
