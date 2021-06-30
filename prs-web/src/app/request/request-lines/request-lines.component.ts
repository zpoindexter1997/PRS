import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../../requestline/requestline.class';
import { RequestLineService } from '../../requestline/requestline.service';
import { Request } from 'src/app/request/request.class';
import { SystemService } from 'src/app/misc/system.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  tbl: string = "table table-dark table-striped";

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
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
  }

  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

  review(): void{
    this.requestsvc.setReview(this.request).subscribe(
      res => {console.debug("Request successfully set for review!", res)},
      err => {console.error(err)}
    )
    this.router.navigateByUrl("/request/list")
  }
}
