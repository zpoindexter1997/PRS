import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
   private usersvc: UserService,
   private activatedRoute: ActivatedRoute,
   private syssvc: SystemService,
   private router: Router
  ) {
  }
  user!: User;
  tbl: string = "table table-dark table-striped"
  
  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    const id = this.getId();
    this.usersvc.get(id).subscribe(
      res => {this.user = res; console.debug("User loaded successfuly!", res)},
      err => console.error(err))
  }

  save(): void{
    const id = this.getId();
    this.usersvc.update(this.user).subscribe(
      res => {this.user = res; console.debug("User deleted successfuly!", res);
      this.router.navigateByUrl("/user/list");
    },
      err => console.error(err))
  }


  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

}
