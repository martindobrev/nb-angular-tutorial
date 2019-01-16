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
    this.articleService.selectedArticle$.subscribe((selectedArticle: Article) => {
      this.selectedArticle = selectedArticle;
    });
  }

  
}
