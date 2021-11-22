import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorBooksService {

  private id: number;
  constructor(private httpClient: HttpClient) { }

  getPosts(city) {
    this.getCity(city).subscribe(
      data => {
      let cityData = data["location_suggestions"]
      this.id = cityData[0]["entity_id"];
      console.log(this.id);
      console.log(data);
    },
    error=>{
      console.log(error);
      alert("error")
    }
    )
    return this.httpClient.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.id}&entity_type=city&sort=rating&order=desc`, {
      headers: new HttpHeaders().set('user-key', "ae6967526646bd6de0576e8425a91293")
    });
  }

  getCity(city) {
    return this.httpClient.get(`https://developers.zomato.com/api/v2.1/locations?query=${city}`, {
      headers: new HttpHeaders().set('user-key', "ae6967526646bd6de0576e8425a91293")
    });
  }
}
