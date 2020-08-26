import { Component, OnInit } from '@angular/core';
import { AuthorBooksService } from '../author-books.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public city: string;
  public cityRes: any;
  constructor(private authorBooks: AuthorBooksService) { }

  ngOnInit(): void {
  }

  getAuthBooks() {
    this.authorBooks.getPosts(this.city).subscribe(
      data => {
       // console.log(data);
        this.cityRes = data["restaurants"];
       // console.log(data["restaurants"])
       // console.log(this.cityRes)
      },
      error =>{
        console.log(error);
      }
    )
  }
}
