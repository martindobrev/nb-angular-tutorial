import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { ArticleDTO } from 'src/app/typescript-angular-client';

@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  articles: Array<ArticleDTO> = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log('CarouselComponent initialized');
    this.articleService.loadArticles().subscribe(articleCollection => {
      this.articles = articleCollection.articles.filter(article => article.featured);
    });
  }

}
