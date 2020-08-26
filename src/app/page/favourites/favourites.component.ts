import { Component, OnInit } from '@angular/core';
import { FavitemsService } from '../services/favitems.service'
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  public topdata: any=[];

  constructor(private favserv: FavitemsService,private authservice: AuthserviceService,private router: Router) { }

  ngOnInit(): void {
    this.favserv.getitems().subscribe(
      data=>{
        this.topdata=data
      }
    )
  }

  delitm(itm){
    this.favserv.delete(itm).subscribe(
      data=>{
        console.log("items after delete",data);
      }
    )
  }
}
