import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  constructor(
    private requestlinesvc: RequestLineService,
    private activatedRoute: ActivatedRoute,
    private productsvc: ProductService,
    private syssvc: SystemService,
    private router: Router
   ) {
   }
   loggedInUserId = this.syssvc.loggedInUser?.id;
   requestline!: RequestLine;
   products: Product[] = [];
   tbl: string = "table table-dark table-striped"
   
   ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    const id = this.getId();
     this.requestlinesvc.get(id).subscribe(
       res => {this.requestline = res; console.debug("Request Line loaded successfuly!", res)},
       err => console.error(err))
       this.productsvc.list().subscribe(
        res => {this.products = res; console.debug("Products loaded successfully!", res)},
        err => {console.error(err)}
      )
   }
 
   save(): void{
     const id = this.getId();
     this.requestline.productId = +this.requestline.productId;
     this.requestlinesvc.update(this.requestline).subscribe(
       res => {this.requestline = res; console.debug("Request Line updated successfuly!", res);
       this.router.navigateByUrl("/request/list");
      },
       err => console.error(err))
   }
 
   getId(): number{
     const routeParams = this.activatedRoute.snapshot.paramMap;
     const id = Number(routeParams.get('id'))
     return id;
   }
}
