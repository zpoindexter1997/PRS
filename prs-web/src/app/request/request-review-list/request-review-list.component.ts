import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  tbl: string = "table table-dark table-striped"

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService
  ) { }
  requests: Request[] = [];
  loggedInUserId = this.syssvc.loggedInUser == null ? 0 : this.syssvc.loggedInUser.id;

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.requestsvc.requests(this.loggedInUserId).subscribe(
      res => { this.requests = res; console.debug("Requests loaded successfully!", res) },
      err => {console.error(err)}
    )

  }

}
