import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  newUser = new User();
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) {
  }

  tbl: string = "table table-dark table-striped";

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
  }
  create(): void {
    this.usersvc.create(this.newUser).subscribe(
      res => { console.debug("User created successfuly!", res);
      this.router.navigateByUrl("/user/list");
    },
      err => console.error(err))
  }
}
