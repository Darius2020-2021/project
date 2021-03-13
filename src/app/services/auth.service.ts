import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//la connexion du user
  email:String
  password:String
  name:String
  firstName:String
  constructor() { }
}
