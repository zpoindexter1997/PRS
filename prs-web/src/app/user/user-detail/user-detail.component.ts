import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
    private activatedRoute: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
   ) {
   }
   user!: User;
   tbl: string = "table table-dark table-striped";
   id: number = 0;

  ngOnInit(): void {
    if(this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login");}
    this.id = this.getId();
    this.usersvc.get(this.id).subscribe(
      res => {this.user = res; console.debug("User loaded successfuly!", res)},
      err => console.error(err))
  }
  delete(): void{
    this.id = this.getId();
    this.usersvc.delete(this.id).subscribe(
      res => {this.user = res; console.debug("User deleted successfuly!", res)},
      err => console.error(err))
      this.router.navigateByUrl("/user/list");
  }
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

}
