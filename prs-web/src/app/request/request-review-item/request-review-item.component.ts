import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/misc/system.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  tbl: string = "table table-dark table-striped";

  constructor(
    private requestsvc: RequestService,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
  ) { }
  request!: Request;

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    let id = this.getId();
    this.requestsvc.get(id).subscribe(
      res => {this.request = res;
      console.debug("Request loaded successfully", res);
      },
      err => {console.error(err)}
    );
    console.debug(this.request.requestLines)
  }

  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

  approve(): void{
    this.requestsvc.approve(this.request).subscribe(
      res => {console.debug("Request successfully approved!", res)},
      err => {console.error(err)}
    )
    this.router.navigateByUrl("/request/review/list")
  }
  reject(): void{
    this.requestsvc.reject(this.request).subscribe(
      res => {console.debug("Request successfully rejected!", res)},
      err => {console.error(err)}
    )
    this.router.navigateByUrl("/request/review/list")
  }

}
