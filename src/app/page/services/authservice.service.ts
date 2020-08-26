import { Injectable } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private users: any = [{
    username: "admin",
    password: "pass"
  }]

  public token:string;

  constructor() { }

  authuser(user) {
    let fuser = this.users.find(us => us.username === user.username && us.password === user.password)
    if(fuser){
      this.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    console.log(this.token);
    return this.token;
  }

  storeToken(token){
    localStorage.setItem('tok', token)
  }
  getToken(){
    return localStorage.getItem('tok')
  }

  deleteToken(){
    localStorage.removeItem('tok')
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
