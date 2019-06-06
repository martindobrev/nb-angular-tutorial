import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageControllerService, PageDTO } from './../../typescript-angular-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit, OnDestroy {
  
  subscriptions: Array<Subscription> = [];
  pages: Array<PageDTO>;

  constructor(private pageControllerService: PageControllerService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.pageControllerService.getPagesUsingGET().subscribe(pageCollection => {
        this.pages = pageCollection.pages;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
