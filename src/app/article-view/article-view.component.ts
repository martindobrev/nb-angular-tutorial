import { Component, OnInit } from '@angular/core';
import { Article } from '../api/api';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log('ArticleViewComponent initialized');
    this.articleService.selectedArticle$.subscribe((article: Article) => {
      this.article = article;
    });
  }

  deselectArticle() {
    this.articleService.selectArticle(null);
  }

}
