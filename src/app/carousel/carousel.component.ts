import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ArticleCollection, Article } from '../api/api';

@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  articles: Array<Article> = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.loadArticles().subscribe(articleCollection => {
      this.articles = articleCollection.articles.filter(article => article.featured);
    });
  }

}
