import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService} from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg ='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(){

  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        if (this.user.emailId=="ayoub.chess98@etudiant.com") {
          console.log("OK 200");
          this._router.navigate(['/loginsuccess2'])
          } else {
            if (this.user.emailId=="ayoub.chess98@professeur.com") {
              console.log("OK 200");
          this._router.navigate(['/loginsuccess'])
            } else {
              console.log("OK 200");
          this._router.navigate(['/loginsuccess3'])
            }
            
          }
      },
      error => {
        console.log("exception");
        this.msg = "Acces Denied! Try Again";
      }
    )
  }

  gotoregistration(){
    this._router.navigate(['/registration']);
  }
}
