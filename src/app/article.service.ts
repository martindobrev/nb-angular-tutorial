import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleCollection } from './api/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}

  public loadArticleById(id: number): Observable<Article> {
    return this.httpClient.get(`/api/v1/articles/${id}`) as Observable<Article>;
  }

  public loadArticles(): Observable<ArticleCollection> {
    return this.httpClient.get(`/api/v1/articles`) as Observable<ArticleCollection>;
  }
}
