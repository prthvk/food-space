import { Component, OnInit } from '@angular/core';
import { DashdataService } from '../services/dashdata.service';
import { FavitemsService } from '../services/favitems.service'
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public topdata: any;

  constructor(private dashData: DashdataService, private favserv: FavitemsService, private authservice: AuthserviceService,private router: Router) { }

  ngOnInit() {
    return this.dashData.getPosts().subscribe(
      data => {
        //console.log(data);
        this.topdata = data["restaurants"];
        // console.log(data["restaurants"])
        // console.log(this.topdata)
      },
      error => {
        console.log(error.message);
      })
  }

  addtofav(fav) {
    if (this.authservice.isAuthenticated()) {
      this.favserv.add(fav).subscribe(
        data => {
          console.log("items after addition", data);
        }
      )
    }else{
      alert("Please login")
      this.router.navigate(['/login'])
    }
  }
}
