import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-errornotfound',
  templateUrl: './errornotfound.component.html',
  styleUrls: ['./errornotfound.component.css']
})
export class ErrornotfoundComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navToHome(): void{
    this.router.navigateByUrl("/home");
  }


}
