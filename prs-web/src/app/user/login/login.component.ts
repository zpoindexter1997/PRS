import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }
  
  username: string = "";
  password: string = "";
  message: string = "";

  login(): void{
    this.syssvc.loggedInUser = null;
    this.usersvc.login(this.username, this.password).subscribe(
      res => {this.syssvc.loggedInUser = res;
      if(this.syssvc.loggedInUser != null){
        this.router.navigateByUrl("/home")
      }
     },
      err => {console.error(err), this.message = "Login failed!"}
      );
  }
  ngOnInit(): void {
  }

}
