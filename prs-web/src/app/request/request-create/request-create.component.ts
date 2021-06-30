import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
    ) {
    }
    
    newRequest = new Request();
    
  loggedInUserId = this.syssvc.loggedInUser?.id;

  tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}

  }
  create(): void {
    this.newRequest.userId = this.syssvc.loggedInUser?.id == null ? 0 : this.syssvc.loggedInUser?.id;
    console.debug(this.newRequest)
    this.requestsvc.create(this.newRequest).subscribe(
      res => { console.debug("Request created successfuly!", res) },
      err => console.error(err))
    this.router.navigateByUrl(`/request/list`);
  }
}
