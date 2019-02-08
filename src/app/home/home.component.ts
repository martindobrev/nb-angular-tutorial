import { Component, OnInit } from '@angular/core';
import { ArticleCollection, Article } from '../api/api';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Array<Article>;
  selectedArticle: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log('HomeComponent initiliazed');
    this.articleService.selectedArticle$.subscribe((selectedArticle: Article) => {
      console.log(`New article selected: ${selectedArticle}`);
      this.selectedArticle = selectedArticle;
    });
  }

  
}
