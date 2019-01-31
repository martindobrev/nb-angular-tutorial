import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BsComponent implements OnInit {

  articles: Array<any>  = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/v1/articles').subscribe((articleCollection :any) => {
      this.articles = articleCollection.articles;
    })
  }

}
