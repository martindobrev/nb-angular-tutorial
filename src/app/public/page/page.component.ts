import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { PageService } from '../../shared/page.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PageDTO } from './../../typescript-angular-client';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  asyncPage: Observable<PageDTO>;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.asyncPage = this.pageService.getPage(paramMap.get('slug'));
    });
  }
}
