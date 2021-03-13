import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Users } from '../models/user.model'
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  userMail= this.authService.email
  userMotPasse= this.authService.password
  userName= this.authService.name
  userFirstName= this.authService.firstName
  userAuto(){
    userMail:['', [Validators.required,Validators.email]]
    userMotPasse:['',Validators.required]
    userName: ['',Validators.required]
    userFirstName: ['',Validators.required]
  }
  constructor(public authService:AuthService) { }
  ngOnInit() {
  }

}
