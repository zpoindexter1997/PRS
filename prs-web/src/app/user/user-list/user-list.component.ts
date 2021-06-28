import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  tbl: string = "table table-dark table-striped"

  constructor(
    private usersvc: UserService
  ) { }
  users!: User[];

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {this.users = res; console.log("Users loaded successfuly!", res)},
      err => console.error(err))
  }
  
  defaultImg: string = "assets/img/handneutral.png";
  upImg: string = "assets/img/handup.png";
  downImg: string = "assets/img/handdown.png";
  idImg: string = this.defaultImg;
  usernameImg: string = this.defaultImg;
  firstNameImg: string = this.defaultImg;
  lastNameImg: string = this.defaultImg;
  phoneImg: string = this.defaultImg;
  emailImg: string = this.defaultImg;
  isReviewerImg: string = this.defaultImg;
  isAdminImg: string = this.defaultImg;

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
  this.usernameImg = this.defaultImg;
  this.firstNameImg = this.defaultImg;
  this.lastNameImg = this.defaultImg;
  this.phoneImg = this.defaultImg;
  this.emailImg = this.defaultImg;
  this.isReviewerImg = this.defaultImg;
  this.isAdminImg = this.defaultImg;
}

  imgSwitch(column: string): void {
    switch(column){
      case('id') : this.idImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('username') : this.usernameImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('firstname') : this.firstNameImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('lastname') : this.lastNameImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('phone') : this.phoneImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('email') : this.emailImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('isReviewer') : this.isReviewerImg = this.sortAsc ? this.upImg : this.downImg; break;
      case('isAdmin') : this.isAdminImg = this.sortAsc ? this.upImg : this.downImg; break;
  }
};

}
