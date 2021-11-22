import { Component, OnInit, Input } from '@angular/core';
import { AuthorBooksService } from '../author-books.service'

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  public 

  @Input()
  public topdata:any;

  constructor(private authorBooks: AuthorBooksService) { }

  ngOnInit() {
    // return this.authorBooks.getPosts("dfs").subscribe(
    //   data => {
    //     //console.log(data);
    //     this.topdata = data["restaurants"];
    //     console.log(data["restaurants"])
    //     console.log(this.topdata)
    //   },
    //   error => {
    //     console.log(error.message);
    //   })
  }
}
