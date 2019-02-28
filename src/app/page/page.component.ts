import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { PageService } from '../page.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../api/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  asyncPage: Observable<Page>;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.asyncPage = this.pageService.getPage(paramMap.get('slug'));
    });
  }
}
