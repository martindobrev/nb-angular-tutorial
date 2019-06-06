import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleDTO, ArticleCollectionDTO } from '../typescript-angular-client';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}

  public loadArticleById(id: number): Observable<ArticleDTO> {
    return this.httpClient.get(`/api/v1/articles/${id}`) as Observable<ArticleDTO>;
  }

  public loadArticles(): Observable<ArticleCollectionDTO> {
    return this.httpClient.get(`/api/v1/articles`) as Observable<ArticleCollectionDTO>;
  }
}
