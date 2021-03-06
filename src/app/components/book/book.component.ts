import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  books: any;
  title: string = 'Page all Books';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }

}
