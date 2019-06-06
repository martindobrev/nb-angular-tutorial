import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PageDTO, PageControllerService } from '../typescript-angular-client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageresolveService implements Resolve<PageDTO> {
  
  constructor(private pageControllerService: PageControllerService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageDTO> {
    if (route.paramMap.has('id')) {
      let id = route.paramMap.get('id');
      return this.pageControllerService.getPageUsingGET(parseInt(id));
    }
    return of(null);
  }
  
}
