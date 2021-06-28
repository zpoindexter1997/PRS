import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  newUser = new User(0, "", "", "", "", "", "", false, false);
  constructor(
    private usersvc: UserService,
    private router: Router
  ) {
  }

  tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
  }
  create(): void {
    this.usersvc.create(this.newUser).subscribe(
      res => { console.log("User created successfuly!", res) },
      err => console.error(err))
    this.router.navigateByUrl("/user/list");
  }
}
