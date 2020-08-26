import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private authserv:AuthserviceService) { }

  ngOnInit(): void {
   
  }

  logout(){
    if(this.authserv.isAuthenticated()){
      console.log("the token is",this.authserv.getToken());
      this.authserv.deleteToken()
    }
  }
}
