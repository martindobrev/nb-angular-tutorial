import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleDTO } from './../../typescript-angular-client';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: ArticleDTO;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var articleId = 0;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      articleId = parseInt(paramMap.get('id'));
    });

    this.articleService.loadArticleById(articleId).subscribe(article => {
      this.article = article;
    });
  
  }

}
