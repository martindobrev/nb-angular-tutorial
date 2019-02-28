import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, Page } from './api/api';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private httpClient: HttpClient) { }

  public getMenu(): Observable<Menu> {
    return this.httpClient.get(`/api/v1/menu`) as Observable<Menu>;
  }

  public getPage(slug: string): Observable<Page> {
    return this.httpClient.get(`/api/v1/pages/${slug}`) as Observable<Page>;
  }
}
