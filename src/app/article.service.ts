import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './api/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private selectedArticle = new BehaviorSubject<Article>(null);
  selectedArticle$ = this.selectedArticle.asObservable();

  constructor(private httpClient: HttpClient) {}

  public selectArticle(article: Article) {
    this.selectedArticle.next(article);
  }

  public loadArticleById(id: number) {
    this.httpClient.get(`/api/v1/articles/${id}`).subscribe((article: Article) => {
      this.selectArticle(article);
    });
  }
  
}
