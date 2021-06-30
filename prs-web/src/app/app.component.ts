import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import {User} from './user/user.class';
import { Vendor } from './vendor/vendor.class';
import { Product } from './product/product.class';
import { Request } from './request/request.class';
import { RequestLine } from './requestline/requestline.class';
import { ProductService } from './product/product.service';
import { RequestService } from './request/request.service';
import { RequestLineService } from './requestline/requestline.service';
import { VendorService } from './vendor/vendor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private usersvc: UserService,
    private productsvc: ProductService,
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
    private vendorsvc: VendorService
  ){};
  loggedInUser!: User;
  users!: User[];
  user!: User;
  vendors!: Vendor[];
  vendor!: Vendor;
  products!: Product[];
  product!: Product;
  requests!: Request[];
  request!: Request;
  requestlines!: RequestLine[];
  requestline!: RequestLine;

  tbl: string = "table table-dark table-striped"

  ngOnInit(): void{
    this.usersvc.list().subscribe(
      res => {this.users = res; console.debug("Users loaded successfuly!", res)},
      err => console.error(err))
    
    this.productsvc.list().subscribe(
      res => {this.products = res; console.debug("Products loaded successfuly!", res)},
      err => console.error(err))
    
    this.requestsvc.list().subscribe(
      res => {this.requests = res; console.debug("Requests loaded successfuly!", res)},
      err => console.error(err))
    
    this.requestlinesvc.list().subscribe(
      res => {this.requestlines = res; console.debug("RequestLines loaded successfuly!", res)},
      err => console.error(err))
    
    this.vendorsvc.list().subscribe(
      res => {this.vendors = res; console.debug("Vendors loaded successfuly!", res)},
      err => console.error(err))
    
    }

    

    // logIn(username: string, password: string): void{
    //   this.usersvc.login(username, password).subscribe(
    //     res => {this.loggedInUser = res; console.debug("Successfully logged in:", res)},
    //     err => console.error(err));
    //     this.router.navigateByUrl("/home")
    //   }

}
