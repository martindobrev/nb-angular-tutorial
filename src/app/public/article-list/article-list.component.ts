import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../shared/article.service';
import { ArticleDTO, ArticleCollectionDTO } from './../../typescript-angular-client';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Array<ArticleDTO> = [];

  constructor(private httpClient: HttpClient, private articleService: ArticleService) { }

  ngOnInit() {
    console.log('ArticleListComponent initialized');
    this.httpClient.get('api/v1/articles').subscribe((articleCollection: ArticleCollectionDTO) => {
      this.articles = articleCollection.articles;
    });
  }

  loadArticle(id: number) {
    this.articleService.loadArticleById(id);
  }

}
