import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

 
  constructor(
    private requestsvc: RequestService,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
   ) {
   }
   request!: Request;
   tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.requestsvc.get(id).subscribe(
      res => {this.request = res; console.debug("Request loaded successfuly!", res)},
      err => console.error(err))
  }
  delete(): void{
    const id = this.getId();
    this.requestsvc.delete(id).subscribe(
      res => {this.request = res; console.debug("Request deleted successfuly!", res)},
      err => console.error(err))
      this.router.navigateByUrl("/request/list");
  }
   
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }


}
