import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleCollection, Article } from '../api/api';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Array<Article>;
  selectedArticle: Article;

  constructor(private httpClient: HttpClient, private articleService: ArticleService) { }

  ngOnInit() {
    this.httpClient.get('api/v1/articles').subscribe((articleCollection: ArticleCollection) => {
      this.articles = articleCollection.articles;
    });

    this.articleService.selectedArticle$.subscribe((selectedArticle: Article) => {
      this.selectedArticle = selectedArticle;
    });
  }

  loadArticle(id: number) {
    this.articleService.loadArticleById(id);
  }
}
