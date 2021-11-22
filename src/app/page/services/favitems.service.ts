import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavitemsService {

  constructor(private httpClient: HttpClient) { }

  add(obj) {
    return this.httpClient.post("http://localhost:3000/favourites", obj);
  }

  delete(obj) {
    return this.httpClient.delete(`http://localhost:3000/favourites/${obj.id}`)
  }

  getitems(){
    return this.httpClient.get("http://localhost:3000/favourites");
  }
}
