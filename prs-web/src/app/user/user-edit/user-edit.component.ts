import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   private router: Router
  ) {
  }
  user!: User;
  tbl: string = "table table-dark table-striped"
  
  ngOnInit(): void {
    const id = this.getId();
    this.usersvc.get(id).subscribe(
      res => {this.user = res; console.log("User loaded successfuly!", res)},
      err => console.error(err))
  }

  save(): void{
    const id = this.getId();
    this.usersvc.update(this.user).subscribe(
      res => {this.user = res; console.log("User deleted successfuly!", res)},
      err => console.error(err))
      this.router.navigateByUrl("/user/list");
  }
  delete(): void{
    const id = this.getId();
    this.usersvc.delete(id).subscribe(
      res => {this.user = res; console.log("User deleted successfuly!", res)},
      err => console.error(err))
      this.router.navigateByUrl("/user/list");
  }

  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

}
