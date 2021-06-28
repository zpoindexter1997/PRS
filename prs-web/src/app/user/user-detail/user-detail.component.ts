import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private usersvc: UserService,
    private activatedRoute: ActivatedRoute
   ) {
   }
   user!: User;
   tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.usersvc.get(id).subscribe(
      res => {this.user = res; console.log("User loaded successfuly!", res)},
      err => console.error(err))
  }

}
