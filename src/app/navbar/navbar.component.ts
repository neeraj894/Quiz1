import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(route: Router) {
    this.router = route;
  }
  isUser: string;
  router: any;
  button:boolean=false
  markUser: boolean;

  ngOnInit(): void {
    this.isUser = localStorage.getItem('isUser');
    if (this.isUser == 'true') {
      this.markUser = true;
    } else {
      this.markUser = false;
    }
  }
  signOut() {
    this.markUser = false;
    localStorage.setItem('isUser', 'false');
    this.router.navigate(['auth']);
  }
  SignInPage() {
    localStorage.setItem('Page','signin')
    this.button=false
  }
  SignUpPage(){
    localStorage.setItem('Page','signup')
    this.button=true
  }
}
