import { AuthServiceService } from './../services/auth-service.service';
import { User } from './../authModel';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  router: any;
  constructor(private service: AuthServiceService, router: Router) {
    this.router = router;
  }
  correctPassword: boolean;
  isUser: boolean = false;
  showError: boolean = false;
  signInPage: boolean = true;
  @Output() public childEvent = new EventEmitter();
  newUser = new User('', '');
  ngOnInit(): void {
    this.showError = false;
  }
  checkPassword() {
    if (this.newUser.password === this.newUser.confirmPassword) {
      this.correctPassword = false;
    } else {
      this.correctPassword = true;
    }
  }
  onSubmit(value: string) {
    if (value == 'signin') {
      var json = {
        email: this.newUser.email,
        password: this.newUser.password,
      };

      this.service.SignIn(json).subscribe(
        (data) => {
          if (data.user) {
            localStorage.setItem('isUser', 'true');
            localStorage.setItem('UserName', data.user);
            this.router.navigate(['quiz']);
            this.showError = false;
          }
        },
        (error) => {
          localStorage.setItem('isUser', 'false');
          this.showError = true;
        }
      );
    }
    if (value == 'signup') {
      this.service.Sign(this.newUser).subscribe(
        (data) => {
          localStorage.setItem('isUser', 'true');
          localStorage.setItem('UserName', data.name);
          this.router.navigate(['quiz']);
        },
        (error) => {
          localStorage.setItem('isUser', 'false');
        }
      );
    }
  }
  ChangeForm(value: string) {
  //  this.signInPage = !this.signInPage;
    //this.childEvent.emit(this.signInPage);
    if (value == 'signin') {
      localStorage.setItem('Page', 'signin');
      this.signInPage=true
    } else {
      localStorage.setItem('Page', 'signup');
      this.signInPage=false
    }
  }
}
