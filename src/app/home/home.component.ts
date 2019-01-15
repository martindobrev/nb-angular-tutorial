import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleCollection, Article } from '../api/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Array<Article>;
  selectedArticle: Article;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('api/v1/articles').subscribe((articleCollection: ArticleCollection) => {
      console.log('ARTICLES ARE:', articleCollection);
      this.articles = articleCollection.articles;
    });
  }

  loadArticle(id: number) {
    this.httpClient.get(`/api/v1/articles/${id}`).subscribe((article: Article) => {
      this.selectedArticle = article;
    });
  }

  goBack() {
    this.selectedArticle = null;
  }

}
