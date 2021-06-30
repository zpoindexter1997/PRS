import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/misc/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  tbl: string = "table table-dark table-striped"

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private router: Router
  ) { }
  requests!: Request[];
  display: boolean = false;
  loggedInUser = this.syssvc.loggedInUser;
  
  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.display = this.loggedInUser?.isAdmin == true ? true : false;
    this.requestsvc.list().subscribe(
      res => {this.requests = res; console.debug("Requests loaded successfuly!", res)},
      err => console.error(err))
  }
  defaultImg: string = "assets/img/handneutral.png";
  upImg: string = "assets/img/handup.png";
  downImg: string = "assets/img/handdown.png";
  idImg: string = this.defaultImg;
  justificationImg: string = this.defaultImg;
  rejectionReasonImg: string = this.defaultImg;
  deliveryModeImg: string = this.defaultImg;
  statusImg: string = this.defaultImg;
  totalImg: string = this.defaultImg;
  userIdImg: string = this.defaultImg;

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
  this.justificationImg = this.defaultImg;
  this.rejectionReasonImg = this.defaultImg;
  this.deliveryModeImg = this.defaultImg;
  this.statusImg = this.defaultImg;
  this.totalImg = this.defaultImg;
  this.userIdImg = this.defaultImg;
}

  imgSwitch(column: string): void {
    switch(column){
      case('id') : this.idImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('justification') : this.justificationImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('rejectionReason') : this.rejectionReasonImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('deliveryMode') : this.deliveryModeImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('status') : this.statusImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('total') : this.totalImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('userId') : this.userIdImg = this.sortAsc ? this.upImg : this.downImg; break;
  }
};
}
