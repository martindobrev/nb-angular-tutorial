import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuDTO, PageDTO } from '../typescript-angular-client';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private httpClient: HttpClient) { }

  public getMenu(): Observable<MenuDTO> {
    return this.httpClient.get(`/api/v1/menu`) as Observable<MenuDTO>;
  }

  public getPage(slug: string): Observable<PageDTO> {
    return this.httpClient.get(`/api/v1/pages/${slug}`) as Observable<PageDTO>;
  }
}
